import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Plus, Minus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";

interface CartSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CartSidebar = ({ open, onOpenChange }: CartSidebarProps) => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    const itemsList = items
      .map(
        (item) =>
          `📦 ${item.quantity}x ${item.name} - ${(item.price * item.quantity).toLocaleString()} ريال`
      )
      .join("\n");
    const message = encodeURIComponent(
      `مرحباً، أرغب في طلب:\n\n${itemsList}\n\n💰 المجموع الكلي: ${totalPrice.toLocaleString()} ريال\n\nشكراً لكم - بهارات الرجوي`
    );
    window.open(`https://wa.me/9671255358?text=${message}`, "_blank");
    clearCart();
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-96 max-w-[90vw] bg-card flex flex-col">
        <SheetTitle className="text-right text-xl font-bold text-foreground flex items-center gap-2 justify-end">
          <span>سلة التسوق</span>
          <ShoppingBag className="w-5 h-5 text-primary" />
        </SheetTitle>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
            <ShoppingBag className="w-16 h-16 text-muted-foreground/30" />
            <p className="text-muted-foreground">سلة التسوق فارغة</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-4 mt-4 pr-1">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 p-3 rounded-xl border border-border/50 bg-background"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-foreground truncate text-right">
                      {item.name}
                    </h4>
                    <p className="text-xs text-muted-foreground text-right">
                      {item.price.toLocaleString()} ريال
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-destructive hover:bg-destructive/10"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-sm font-bold w-6 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 mt-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-primary">
                  {totalPrice.toLocaleString()} ريال
                </span>
                <span className="text-foreground">المجموع الكلي</span>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full gradient-gold text-primary-foreground font-bold py-6 rounded-xl text-base"
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                شراء الآن عبر واتساب
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
