import { useState, useEffect } from "react";
import axios from "axios";

const useEmails = (limit = 10) => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshCount, setRefreshCount] = useState(0);

  const fetchEmails = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("token");

      // // Bước 1: Gọi API AI Summary trước
      // await axios.get(
      //   `${process.env.REACT_APP_API_URL}/api/emails/inbox/top-10-with-AISummarize`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );

      // Bước 2: Gọi API để lấy dữ liệu email sau khi AI xử lý xong
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/emails/inbox/10inbox`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("API response:", response.data);

      const emailsRaw = response.data.data || response.data;

      if (!Array.isArray(emailsRaw)) {
        throw new Error("Invalid email list format from API");
      }

      const formattedEmails = emailsRaw.map((email) => ({
        id: email.id || email.messageId,
        sender: email.from || email.sender,
        subject: email.subject || "No subject",
        date: email.date
          ? new Date(email.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })
          : "Unknown date",
        summary: email.summary || email.snippet,
        messageId: email.messageId || null,
        isRead: email.isRead || false,
        labels: email.labels || [],
      }));

      setEmails(formattedEmails);
    } catch (err) {
      let errorMessage = "Failed to fetch emails";

      if (err.response) {
        errorMessage =
          err.response.data?.message || `Server error: ${err.response.status}`;
      } else if (err.request) {
        errorMessage = "Network error: Could not connect to server";
      } else {
        errorMessage = err.message;
      }

      setError(errorMessage);
      console.error("Error fetching emails:", err);
    } finally {
      setLoading(false);
    }
  };

  const refresh = () => {
    setRefreshCount((prev) => prev + 1);
  };

  useEffect(() => {
    fetchEmails();
  }, [limit, refreshCount]);

  return { emails, loading, error, refresh };
};

export default useEmails;
