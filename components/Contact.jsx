import { CustomButton, TextInput } from ".";

const Contact = () => {
  return (
    <div>
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.3582999616815!2d-74.72290082471395!3d4.149753146186714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3edb584b5d05a7%3A0xb54f1bc6468458be!2sCarmen%20de%20Apical%C3%A1!5e0!3m2!1sen!2sco!4v1688839768342!5m2!1sen!2sco"
         
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 w-full bg-white rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10">
          <h2 className="text-gray-800 text-lg mb-1 font-medium">Feedback</h2>
          <p className="mb-5 text-gray-600">
            We'll love to hear your feedback!
          </p>

          <TextInput type="email" placeholder="Email" styles="bg-white mb-5" />

          <textarea
            className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base px-4 py-2 mb-5 resize-none"
            placeholder="Message..."
          ></textarea>

          <CustomButton
            title="Send Feedback"
            containerStyles={`w-full block bg-[#3b81f5] text-white px-6 py-2.5 text-md rounded hover:bg-blue-800 focuc:outline-none flex-col items-center`}
          />

          <p className="text-xs text-gray-500 mt-4">
            We normally reply feedbacks withing 2 business days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
