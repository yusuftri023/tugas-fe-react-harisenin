import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function ErrorContent({ error }) {
  const navigate = useNavigate();
  return (
    <div className="mx-auto my-12 w-[1000px]">
      <h1 className="text-4xl text-center mb-6">
        Ooops... there is an error while loading the content
      </h1>
      <button
        onClick={() => navigate("/")}
        className="  block px-5 py-2 text-l mb-6 bg-blue-500 rounded-3xl text-slate-50 mx-auto font-semibold"
      >
        Back to Homepage
      </button>
      <code>{error.message}:</code>
      <code className="block">{error.stack}</code>
    </div>
  );
}

export default ErrorContent;
