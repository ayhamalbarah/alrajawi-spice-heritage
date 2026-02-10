import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import CartSidebar from "@/components/CartSidebar";

const navLinks = [
  { name: "الرئيسية", href: "#home" },
  { name: "قصتنا", href: "#story" },
  { name: "منتجاتنا", href: "#products" },
  { name: "فروعنا", href: "#branches" },
  { name: "تواصل معنا", href: "#contact" },
];

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Header = ({ searchQuery, onSearchChange }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      onSearchChange("");
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="flex flex-col items-end">
                <h1 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white text-shadow-hero"}`}>
                  بهارات الرجوي
                </h1>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full transition-colors duration-300 ${isScrolled ? "text-primary bg-primary/10" : "text-white/90 bg-white/15"}`}>
                  منذ 1954
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-medium transition-colors relative group ${isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white text-shadow-hero"}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 right-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-primary" : "bg-white"}`} />
                </motion.button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="hidden md:flex items-center gap-2"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleSearchClick}
                  className={`transition-colors duration-300 ${isScrolled ? "text-foreground/70 hover:text-primary hover:bg-primary/10" : "text-white/90 hover:text-white hover:bg-white/15"} ${showSearch ? (isScrolled ? "text-primary bg-primary/10" : "text-white bg-white/20") : ""}`}
                >
                  {showSearch ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsCartOpen(true)}
                  className={`relative transition-colors duration-300 ${isScrolled ? "text-foreground/70 hover:text-primary hover:bg-primary/10" : "text-white/90 hover:text-white hover:bg-white/15"}`}
                >
                  <ShoppingBag className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -left-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold animate-in zoom-in">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </motion.div>

              {/* Mobile: cart icon */}
              <div className="flex md:hidden items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleSearchClick}
                  className={`transition-colors duration-300 ${isScrolled ? "text-foreground/70" : "text-white/90"}`}
                >
                  {showSearch ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsCartOpen(true)}
                  className={`relative transition-colors duration-300 ${isScrolled ? "text-foreground/70" : "text-white/90"}`}
                >
                  <ShoppingBag className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -left-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </div>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon" className={`transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"}`}>
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-card">
                  <SheetTitle className="text-right text-xl font-bold text-foreground mb-8">
                    بهارات الرجوي
                  </SheetTitle>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => scrollToSection(link.href)}
                        className="text-right text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border"
                      >
                        {link.name}
                      </button>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Search Bar */}
          {showSearch && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="pb-4"
            >
              <div className="relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="ابحث عن منتج..."
                  className="w-full pr-10 pl-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>

      <CartSidebar open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  );
};

export default Header;
