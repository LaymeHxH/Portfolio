import { useEffect, useState } from "react";

function Reviews({ theme }) {
  const [comments, setComments] = useState([]);
  const isDark = theme === "dark";

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/8/comments")
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section
      className={`rounded-2xl border p-6 shadow-[0_0_24px_rgba(124,108,255,0.08)] ${
        isDark
          ? "border-violet-900/70 bg-[#151122]/95"
          : "border-slate-300 bg-white"
      }`}
    >
      <h2 className="mb-5 border-l-4 border-violet-500 pl-3 text-2xl font-semibold text-violet-500">
        Відгуки роботодавців
      </h2>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className={`rounded-xl border p-4 ${
              isDark
                ? "border-violet-800/60 bg-violet-950/20"
                : "border-slate-200 bg-slate-50"
            }`}
          >
            <h4 className="font-semibold text-violet-500">{comment.name}</h4>
            <p className={`text-sm ${isDark ? "text-violet-400" : "text-slate-500"}`}>
              {comment.email}
            </p>
            <p className={`mt-2 ${isDark ? "text-violet-100/90" : "text-slate-700"}`}>
              {comment.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;