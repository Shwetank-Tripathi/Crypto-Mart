// Import React hooks for state management
import { useState, useRef } from 'react';
// Import EmailJS for email functionality
import emailjs from '@emailjs/browser';

// ReachUs component for contact form and company information
function ReachUs() {
  // Create a ref for the form element
  const form = useRef();
  
  // State for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  
  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    
    // Set submitting state
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // EmailJS configuration - you'll need to replace these with your actual IDs
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID; // Replace with your EmailJS service ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; // Replace with your EmailJS template ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; // Replace with your EmailJS public key
    
    // Prepare template parameters
    const templateParams = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      message: formData.message,
      newsletter: 'No' // Default value since newsletter feature is removed
    };
    
    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        // Reset form data
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  
  // Return the JSX structure for the contact section
  return (
    <div className="max-w-screen-lg mx-auto p-5 py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 bg-gray-800">
        <div className="bg-gray-900 md:col-span-4 p-10 text-white">
          <p className="mt-4 text-sm leading-7 font-regular uppercase">
            Contact
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-blue-600">Touch</span>
          </h3>
          <p className="mt-4 leading-7 text-gray-400">
            Welcome to the Cryptomart Reach Us page! We&apos;re here to assist you
            with any inquiries, feedback, or support you may need. Here&apos;s how
            you can get in touch with us:
          </p>

          <div className="flex items-center mt-5">
            <svg
              className="h-6 mr-2 text-blue-600"
              fill="currentColor"
              version="1.1"
              viewBox="0 0 489.536 489.536"
              enableBackground="new 0 0 489.536 489.536"
            >
              <g>
                <g>
                  <path d="m488.554,476l-99-280.2c-1-4.2-5.2-7.3-9.4-7.3h-45.6c12.9-31.1 19.6-54.9 19.6-70.8 0-64.6-50-117.7-112.5-117.7-61.5,0-112.5,52.1-112.5,117.7 0,17.6 8.2,43.1 19.9,70.8h-39.7c-4.2,0-8.3,3.1-9.4,7.3l-99,280.2c-3.2,10.3 6.3,13.5 9.4,13.5h468.8c4.2,0.5 12.5-4.2 9.4-13.5zm-246.9-455.3c51,1.06581e-14 91.7,43.7 91.7,96.9 0,56.5-79.2,182.3-91.7,203.1-31.3-53.1-91.7-161.5-91.7-203.1 0-53.1 40.6-96.9 91.7-96.9zm-216.7,448l91.7-259.4h41.7c29.9,64.1 83.3,151 83.3,151s81.4-145.7 83.8-151h47.4l91.7,259.4h-439.6z"></path>
                  <rect
                    width="136.5"
                    x="177.054"
                    y="379.1"
                    height="20.8"
                  ></rect>
                  <path d="m289.554,108.2c0-26-21.9-47.9-47.9-47.9s-47.9,21.9-47.9,47.9 20.8,47.9 47.9,47.9c27.1,0 47.9-21.8 47.9-47.9zm-75-1c0-14.6 11.5-27.1 27.1-27.1s27.1,12.5 27.1,27.1-11.5,27.1-27.1,27.1c-14.6,2.84217e-14-27.1-12.5-27.1-27.1z"></path>
                </g>
              </g>
            </svg>
            <span className="text-sm text-gray-400">
              House #14, Street #12, New Delhi.
            </span>
          </div>
          <div className="flex items-center mt-5">
            <svg
              className="h-6 mr-2 text-blue-600"
              fill="currentColor"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 60.002 60.002"
              //   style="enable-background:new 0 0 60.002 60.002;"
            >
              <g>
                <path
                  d="M59.002,37.992c-3.69,0-6.693-3.003-6.693-6.693c0-0.553-0.447-1-1-1s-1,0.447-1,1c0,4.794,3.899,8.693,8.693,8.693
		c0.553,0,1-0.447,1-1S59.554,37.992,59.002,37.992z"
                ></path>
                <path
                  d="M58.256,35.65c0.553,0,1-0.447,1-1s-0.447-1-1-1c-0.886,0-1.605-0.72-1.605-1.605c0-0.553-0.447-1-1-1s-1,0.447-1,1
		C54.65,34.033,56.267,35.65,58.256,35.65z"
                ></path>
                <path
                  d="M20.002,2.992c3.691,0,6.693,3.003,6.693,6.693c0,0.553,0.448,1,1,1s1-0.447,1-1c0-4.794-3.9-8.693-8.693-8.693
		c-0.552,0-1,0.447-1,1S19.449,2.992,20.002,2.992z"
                ></path>
                <path
                  d="M19.748,6.334c0,0.553,0.448,1,1,1c0.885,0,1.604,0.72,1.604,1.605c0,0.553,0.448,1,1,1s1-0.447,1-1
		c0-1.988-1.617-3.605-3.604-3.605C20.196,5.334,19.748,5.781,19.748,6.334z"
                ></path>
                <path
                  d="M44.076,37.889c-1.276-0.728-2.597-0.958-3.721-0.646c-0.844,0.234-1.532,0.768-1.996,1.546
		c-1.02,1.22-2.286,2.646-2.592,2.867c-2.367,1.604-4.25,1.415-6.294-0.629L17.987,29.542c-2.045-2.045-2.233-3.928-0.631-6.291
		c0.224-0.31,1.65-1.575,2.87-2.596c0.778-0.464,1.312-1.152,1.546-1.996c0.311-1.123,0.082-2.444-0.652-3.731
		c-0.173-0.296-4.291-7.27-8.085-9.277c-1.926-1.019-4.255-0.669-5.796,0.872L4.7,9.059c-4.014,4.014-5.467,8.563-4.321,13.52
		c0.956,4.132,3.742,8.529,8.282,13.068l14.705,14.706c5.762,5.762,11.258,8.656,16.298,8.656c3.701,0,7.157-1.562,10.291-4.695
		l2.537-2.537c1.541-1.541,1.892-3.87,0.872-5.796C51.356,42.186,44.383,38.069,44.076,37.889z M51.078,50.363L48.541,52.9
		c-6.569,6.567-14.563,5.235-23.76-3.961L10.075,34.233c-4.271-4.271-6.877-8.344-7.747-12.104
		c-0.995-4.301,0.244-8.112,3.786-11.655l2.537-2.537c0.567-0.566,1.313-0.862,2.07-0.862c0.467,0,0.939,0.112,1.376,0.344
		c3.293,1.743,7.256,8.454,7.29,8.511c0.449,0.787,0.62,1.608,0.457,2.196c-0.1,0.36-0.324,0.634-0.684,0.836l-0.15,0.104
		c-0.853,0.712-2.883,2.434-3.308,3.061c-0.612,0.904-1.018,1.792-1.231,2.665c-0.711-1.418-1.286-3.06-1.475-4.881
		c-0.057-0.548-0.549-0.935-1.098-0.892c-0.549,0.058-0.949,0.549-0.892,1.099c0.722,6.953,6.129,11.479,6.359,11.668
		c0.025,0.02,0.054,0.028,0.08,0.045l10.613,10.613c0.045,0.045,0.092,0.085,0.137,0.129c0.035,0.051,0.058,0.108,0.104,0.154
		c0.189,0.187,4.704,4.567,11.599,5.283c0.035,0.003,0.07,0.005,0.104,0.005c0.506,0,0.94-0.383,0.994-0.896
		c0.057-0.55-0.342-1.041-0.892-1.099c-2.114-0.219-3.987-0.839-5.548-1.558c0.765-0.23,1.543-0.612,2.332-1.146
		c0.628-0.426,2.35-2.455,3.061-3.308l0.104-0.151c0.202-0.359,0.476-0.583,0.836-0.684c0.588-0.159,1.409,0.008,2.186,0.45
		c0.067,0.04,6.778,4.003,8.521,7.296C52.202,48.062,51.994,49.447,51.078,50.363z"
                ></path>
              </g>
            </svg>
            <span className="text-sm text-gray-400">+93 749 99 65 50</span>
          </div>
          <div className="flex items-center mt-5">
            <svg
              className="h-6 mr-2 text-blue-600"
              fill="currentColor"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 300.988 300.988"
              //   style="enable-background:new 0 0 300.988 300.988;"
            >
              <g>
                <g>
                  <path
                    d="M150.494,0.001C67.511,0.001,0,67.512,0,150.495s67.511,150.493,150.494,150.493s150.494-67.511,150.494-150.493
                S233.476,0.001,150.494,0.001z M150.494,285.987C75.782,285.987,15,225.206,15,150.495S75.782,15.001,150.494,15.001
                s135.494,60.782,135.494,135.493S225.205,285.987,150.494,285.987z"
                  ></path>
                  <polygon points="142.994,142.995 83.148,142.995 83.148,157.995 157.994,157.995 157.994,43.883 142.994,43.883 		"></polygon>
                </g>
              </g>
            </svg>
            <span className="text-sm text-gray-400">24/7</span>
          </div>
        </div>
        <form ref={form} onSubmit={handleSubmit} className="md:col-span-8 p-10">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              Sorry! There was an error sending your message. Please try again.
            </div>
          )}
          
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
                <input
                  className="appearance-none block w-full bg-gray-700 text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-900"
                  id="grid-first-name"
                  name="firstName"
                  type="text"
                  placeholder="Jane"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
                <input
                  className="appearance-none block w-full bg-gray-700 text-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500"
                  id="grid-last-name"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Email Address
                <input
                  className="appearance-none block w-full bg-gray-700 text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500"
                  id="grid-email"
                  name="email"
                  type="email"
                  placeholder="********@*****.**"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-message"
              >
                Your Message
                <textarea
                  id="grid-message"
                  name="message"
                  rows="10"
                  className="appearance-none block w-full bg-gray-700 text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500"
                  placeholder="Enter your message here..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </label>
            </div>
            <div className="flex justify-end w-full px-3">
              <button
                className={`shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded ${
                  isSubmitting 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-400'
                }`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReachUs;
