import React from "react";

export default function TermsAndCondition() {
    return (
        <>
            <div className="bg-gray-100 p-6 border-t-2 border-t-black">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="border-b-2 border-black pb-4">
                        <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                            Login:
                        </h1>
                        <p className="text-lg sm:text-xl font-medium text-gray-600 mt-2">
                            Users should log in using the provided email and password during registration. 
                            <br /> If the password is forgotten, we are not responsible.
                        </p>
                    </div>
                    <div className="border-b-2 border-black pb-4">
                        <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                            Signup:
                        </h1>
                        <p className="text-lg sm:text-xl font-medium text-gray-600 mt-2">
                            Users should sign up using their email ID, name, and confirm a password.
                            <br /> If the password is forgotten, we are not responsible. Please remember your password or note it somewhere.
                        </p>
                    </div>
                    <div className="border-b-2 border-black pb-4">
                        <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                            Home:
                        </h1>
                        <p className="text-lg sm:text-xl font-medium text-gray-600 mt-2">
                            If the user is not logged in, they will be shown a request page with two options: login or signup.
                            <br /> If logged in, the posts will be visible.
                        </p>
                    </div>
                    <div className="border-b-2 border-black pb-4">
                        <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                            Profile:
                        </h1>
                        <p className="text-lg sm:text-xl font-medium text-gray-600 mt-2">
                            Here you will see your profile at the top, containing a profile photo only visible to you, 
                            <br /> your registered date, your name, and your email. 
                            <br /> Please note that registered details like email and name, and profile photos cannot be edited once created due to server issues. 
                            <br /> We hope you understand. Thank you.
                        </p>
                    </div>
                    <div className="border-b-2 border-black pb-4">
                        <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                            Add Post:
                        </h1>
                        <p className="text-lg sm:text-xl font-medium text-gray-600 mt-2">
                            Here you can add your posts. Provide a title for your post and the content in the editor. 
                            <br /> You can set your photos as public or private, choose the photo, and click submit. 
                            <br /> If your internet is good, you will be redirected to the post. 
                            <br /> If there are any mismatches, please verify and submit your post again.
                        </p>
                    </div>
                    <div className="pb-4 border-b-2 border-black">
                        <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                            Contact Us:
                        </h1>
                        <p className="text-lg sm:text-xl font-medium text-gray-600 mt-2">
                            Provide your registered email or, if not registered, your personal email ID and name. 
                            <br /> Convey your content or problem and click submit. 
                            <br /> If everything goes right, you will see an alert box showing "Message sent successfully".
                        </p>
                    </div>
                    <div className="pb-4">
                        <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                            Copy Right:
                        </h1>
                        <p className="text-lg sm:text-xl font-medium text-gray-600 mt-2">
                            Copy Rights reserved by  @Sadhvik Baba Patibandla
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
