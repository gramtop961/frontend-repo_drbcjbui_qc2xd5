export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} SlotSwapper. All rights reserved.</p>
        <div className="text-sm text-gray-500">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <span className="mx-3">•</span>
          <a href="#" className="hover:text-gray-900">Terms</a>
          <span className="mx-3">•</span>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}
