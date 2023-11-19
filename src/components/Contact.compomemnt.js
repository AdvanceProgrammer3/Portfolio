import React from "react";

function Contact() {
  return (
    <div>
      <section class="py-16">
        <div class="container mx-auto px-2">
          <h2 class="text-3xl font-bold mb-8">Contact Me</h2>
          <form
            action="#"
            method="post"
            class="px-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* <!-- Name Input --> */}
            <div class="mb-6">
              <label for="name" class="block text-sm font-medium text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="mt-1 p-3 w-full border rounded-md"
                placeholder="John Doe"
                required
              />
            </div>

            {/* <!-- Email Input --> */}
            <div class="mb-6">
              <label
                for="email"
                class="block text-sm font-medium text-gray-600"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="mt-1 p-3 w-full border rounded-md"
                placeholder="john@example.com"
                required
              />
            </div>

            {/* <!-- Message Input --> */}
            <div class="mb-6">
              <label
                for="message"
                class="block text-sm font-medium text-gray-600"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                class="mt-1 p-3 w-full border rounded-md"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>

            {/* <!-- Submit Button --> */}
            <div class="text-center">
              <button
                type="submit"
                class="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
