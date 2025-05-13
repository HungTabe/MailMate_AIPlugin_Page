import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useAuth } from "../authContext/AuthContext";

const CACHE_KEY = "user_profile_cache";
const CACHE_EXPIRY = 30 * 60 * 1000; // 30 minutes cache duration

const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, handleLogout } = useAuth();

  const clearProfileCache = useCallback(() => {
    localStorage.removeItem(CACHE_KEY);
    setProfile(null);
    setLoading(true);
  }, []);

  const fetchProfile = useCallback(
    async (forceRefresh = false) => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setLoading(false);
          return;
        }

        if (!forceRefresh) {
          const cachedProfile = localStorage.getItem(CACHE_KEY);
          if (cachedProfile) {
            const { data, timestamp } = JSON.parse(cachedProfile);
            if (Date.now() - timestamp < CACHE_EXPIRY) {
              setProfile(data);
              setLoading(false);
              return;
            }
          }
        }

        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/auth/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const profileData = response.data;
        setProfile(profileData);
        setError(null);

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            data: profileData,
            timestamp: Date.now(),
          })
        );
      } catch (err) {
        if (err.response?.status === 401) {
          handleLogout();
          return;
        }

        setError(err.response?.data?.message || "Failed to fetch profile");

        const cachedProfile = localStorage.getItem(CACHE_KEY);
        if (cachedProfile) {
          const { data } = JSON.parse(cachedProfile);
          setProfile(data);
        }
      } finally {
        setLoading(false);
      }
    },
    [handleLogout]
  );

  useEffect(() => {
    const hasToken = !!localStorage.getItem("token");
    if (!hasToken) {
      clearProfileCache();
      return;
    }

    fetchProfile();
    const interval = setInterval(() => fetchProfile(true), 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchProfile, clearProfileCache]);

  useEffect(() => {
    if (!user) {
      clearProfileCache();
      return;
    }

    fetchProfile();

    const refreshInterval = setInterval(() => {
      fetchProfile(true);
    }, 5 * 60 * 1000);

    return () => clearInterval(refreshInterval);
  }, [fetchProfile, user, clearProfileCache]);

  return {
    profile,
    loading,
    error,
    refetch: fetchProfile,
    clearProfile: clearProfileCache,
  };
};

export default useProfile;
