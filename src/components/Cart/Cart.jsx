import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
    const loadedCart = useLoaderData();
    const [cartItems, setCartItems] = useState(loadedCart);

    const removeItem = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(
                    `https://haven-wheels-server.vercel.app/cart/delete/${id}`,
                    {
                        method: "DELETE",
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "This Car has been deleted from your Cart.",
                                "success"
                            );
                            const remaining = cartItems.filter(
                                (car) => car._id !== id
                            );
                            setCartItems(remaining);
                        }
                    });
            }
        });
    };

    return (
        <div className="p-4 min-h-[80vh] dark:bg-zinc-600">
            <div className="container mx-auto">
                <h1 className="text-3xl font-semibold mb-4 dark:text-white">
                    Your Cart
                </h1>
                {cartItems.length ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {cartItems.map((item) => (
                            <div
                                key={item._id}
                                className="bg-white dark:bg-slate-600 p-4 rounded shadow-md"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-40 object-cover object-center mb-2 rounded"
                                />
                                <h2 className="text-xl dark:text-white font-semibold mb-2">
                                    {item.name}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-200 mb-2">
                                    ${item.price}
                                </p>
                                <button
                                    onClick={() => removeItem(item._id)}
                                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="m-auto text-center min-h-[70vh] flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-bold text-red-600">
                            Oops! No Products Found in your cart
                        </h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
