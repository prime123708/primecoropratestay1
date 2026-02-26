export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">404</h1>
        <p className="text-gray-600">Page not found</p>
        <a href="/" className="text-[#EF4444] underline">Go home</a>
      </div>
    </div>
  );
}
