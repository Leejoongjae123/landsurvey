"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client"; // 상대 경로는 프로젝트 구조에 따라 다를 수 있음
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
function page() {
  const router=useRouter()
  const supabase = createClient();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser("");
  };

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      }
    );

    // Clean up the subscription on unmount
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const goToSignIn = () => {
    router.push("/signin");
  };

  console.log("isLoggedIn:", isLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <div id="updateProductModal"  className="flex justify-center items-center">
        <div className="p-4 w-full max-w-2xl h-full md:h-auto">
            
            <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            
                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Update Information
                    </h3>
                </div>
            
                <div >
                    <div className="grid gap-4 mb-4 sm:grid-cols-2">
                        <div>
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" name="name" id="name" value="iPad Air Gen 5th Wi-Fi" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ex. Apple iMac 27&ldquo;"/>
                        </div>
                        <div>
                            <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                            <input type="text" name="brand" id="brand" value="Google" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ex. Apple"/>
                        </div>
                        <div>
                            <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input type="number" value="399" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$299"/>
                        </div>
                        <div>
                            <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected="">Electronics</option>
                                <option value="TV">TV/Monitors</option>
                                <option value="PC">PC</option>
                                <option value="GA">Gaming/Console</option>
                                <option value="PH">Phones</option>
                            </select>
                        </div>
                        <div className="sm:col-span-2">
                            <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea id="description" rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write a description...">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US</textarea>                    
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button color='primary' type="submit" className="">
                            Update
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
      ) : (
        <div
          id="info-popup"
          tabindex="-1"
          className="flex justify-center items-center h-[30vh]" 
        >
          <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
              <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                  Please Signin
                </h3>
                <p>
                Please Signin to continue.
                </p>
              </div>
              <div className="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
                <div className="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                  
                  <Button
                    color="primary"
                    id="confirm-button"
                    type="button"
                    className="py-2 px-4 w-full text-sm font-medium text-center text-white "
                    onClick={goToSignIn}
                  >
                    Go to Signin
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
