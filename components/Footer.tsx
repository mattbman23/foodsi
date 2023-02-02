export default function Footer() {
  return (
    <footer className="p-4 md:py-8 text-secondary">
      <hr className="my-6 border-gray-400 lg:my-8" />
      <span className="block text-center text-md">
        &copy; {new Date().getFullYear()}{" "}
        <a href="/" className="hover:underline">
          Foodsi
        </a>
      </span>
    </footer>
  );
}
