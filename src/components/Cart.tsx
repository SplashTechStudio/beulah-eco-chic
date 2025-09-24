import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const CartItem = ({ item }: { item: any }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const incrementQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg">
      <img 
        src={item.image} 
        alt={item.name}
        className="w-16 h-16 object-cover rounded-md"
      />
      
      <div className="flex-1 space-y-2">
        <h3 className="font-medium text-sm leading-tight">{item.name}</h3>
        <Badge variant="outline" className="text-xs">
          {item.category}
        </Badge>
        <p className="font-semibold text-primary">
          ₦{item.price.toLocaleString()}
        </p>
      </div>
      
      <div className="flex flex-col items-end gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => removeFromCart(item.id)}
          className="h-6 w-6 p-0 text-destructive hover:text-destructive"
        >
          <Trash2 className="h-3 w-3" />
        </Button>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={decrementQuantity}
            className="h-6 w-6 p-0"
          >
            <Minus className="h-3 w-3" />
          </Button>
          
          <span className="text-sm font-medium w-8 text-center">
            {item.quantity}
          </span>
          
          <Button
            variant="outline"
            size="sm"
            onClick={incrementQuantity}
            className="h-6 w-6 p-0"
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const { items, total, itemCount, isOpen, closeCart, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    // Calculate total amount in kobo for Paystack
    const totalAmount = total * 100;

    // Initialize Paystack payment
    // @ts-ignore
    const handler = window.PaystackPop.setup({
      key: 'pk_test_df9d3975724b8a8d98f2fda63541d0d739abad7c',
      email: 'customer@example.com', // In real app, get from user input
      amount: totalAmount,
      currency: 'NGN',
      callback: function(response: any) {
        toast.success(`Payment successful! Reference: ${response.reference}`);
        console.log('Payment successful:', response);
        clearCart();
        closeCart();
      },
      onClose: function() {
        toast.info('Payment cancelled');
      }
    });
    
    handler.openIframe();
  };

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader className="space-y-4">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Shopping Cart
            {itemCount > 0 && (
              <Badge variant="secondary">
                {itemCount} item{itemCount !== 1 ? 's' : ''}
              </Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-[calc(100vh-120px)] mt-6">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-center">
              <div className="space-y-4">
                <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto" />
                <p className="text-muted-foreground">Your cart is empty</p>
                <Button onClick={closeCart} variant="outline">
                  Continue Shopping
                </Button>
              </div>
            </div>
          ) : (
            <>
              <ScrollArea className="flex-1 -mr-4 pr-4">
                <div className="space-y-4">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              </ScrollArea>

              <div className="space-y-4 pt-4">
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({itemCount} items)</span>
                    <span>₦{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-primary">₦{total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button 
                    onClick={handleCheckout} 
                    className="w-full btn-gradient text-lg py-6"
                    size="lg"
                  >
                    Checkout with Paystack
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button 
                      onClick={clearCart} 
                      variant="outline" 
                      className="flex-1"
                    >
                      Clear Cart
                    </Button>
                    <Button 
                      onClick={closeCart} 
                      variant="ghost" 
                      className="flex-1"
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;