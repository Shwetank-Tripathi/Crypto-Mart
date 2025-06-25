// Import CoinCard component for displaying team member information
import CoinCard from "../components/CoinCard";

// AboutPage component for displaying company information and team details
function AboutPage() {
  // Return the JSX structure for the about page
  return (
    // Main container with blur background effect
    <div className="blur-bg">
      {/* Hero section with company information */}
      <section className="flex items-center bg-stone-50 xl:h-screen font-poppins dark:bg-gray-800 ">
        {/* Container for the content with responsive layout */}
        <div className="justify-center flex-1 max-w-auto py-4 mx-auto lg:py-6 md:px-6">
          {/* Flex container for the main content */}
          <div className="flex pt-[75px] mb-10 flex-wrap items-center">
            {/* Left side content with company description */}
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              {/* Content wrapper with max width */}
              <div className="lg:max-w-md">
                {/* Section label */}
                <span className="text-xl font-semibold text-blue-600 uppercase dark:text-blue-500">
                  About Us
                </span>
                {/* Main heading */}
                <h2 className="mt-4 mb-6 text-2xl font-bold dark:text-gray-300">
                  We are the best E-Commerce site in Europe and Asia
                </h2>
                {/* Company description paragraph */}
                <p className="mb-10 text-gray-600 dark:text-gray-400 ">
                  Welcome to Cryptomart, your premier destination for seamless
                  cryptocurrency-powered shopping experiences. At Cryptomart, we
                  believe in the transformative potential of digital currencies,
                  and we&apos;re dedicated to making the future of commerce
                  accessible to everyone.
                </p>
              </div>
            </div>
            {/* Right side content with company features */}
            <div className="w-full px-4 lg:w-1/2 lg:my-20">
              {/* Design feature section */}
              <div className="flex mb-4">
                {/* Icon container for design feature */}
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                  {/* Code icon SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-file-earmark-code"
                    viewBox="0 0 16 16"
                  >
                    {/* SVG path for code icon */}
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                    <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
                  </svg>
                </span>
                {/* Design feature content */}
                <div>
                  {/* Design feature heading */}
                  <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                    Design
                  </h2>
                  {/* Design feature description */}
                  <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                    Our design philosophy revolves around putting the user
                    first. We conduct extensive research to understand user
                    preferences, behaviors, and pain points, ensuring that our
                    design decisions are driven by user needs.
                  </p>
                </div>
              </div>
              {/* Strategy feature section */}
              <div className="flex mb-4">
                {/* Icon container for strategy feature */}
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                  {/* Document icon SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-file-text"
                    viewBox="0 0 16 16"
                  >
                    {/* SVG path for document icon */}
                    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                  </svg>
                </span>
                {/* Strategy feature content */}
                <div>
                  {/* Strategy feature heading */}
                  <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                    Strategy
                  </h2>
                  {/* Strategy feature description */}
                  <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                    Before launching Cryptomart, we conducted thorough market
                    analysis to identify opportunities and understand the
                    competitive landscape. This insight allows us to tailor our
                    strategy to meet the needs of our target audience and
                    differentiate ourselves in the market.
                  </p>
                </div>
              </div>
              {/* Development feature section */}
              <div className="flex mb-4">
                {/* Icon container for development feature */}
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                  {/* Bank/Development icon SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-bank2"
                    viewBox="0 0 16 16"
                  >
                    {/* SVG path for bank/development icon */}
                    <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"></path>
                  </svg>
                </span>
                {/* Development feature content */}
                <div>
                  {/* Development feature heading */}
                  <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                    Develop
                  </h2>
                  {/* Development feature description */}
                  <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                    Cryptomart&apos;s development is built on a scalable architecture
                    that can accommodate growth and handle increased traffic and
                    transactions as the platform expands. Our development team
                    utilizes best practices and cutting-edge technologies to
                    ensure the platform remains stable and reliable even during
                    peak usage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team section heading */}
      <div className="text-5xl flex py-20">
        {/* Team heading with blue color */}
        <div className="text-[#3b82f6] mx-auto mt-10">OUR TEAM</div>
      </div>
      {/* Team members grid container */}
      <div className="flex flex-row justify-center gap-4 flex-wrap min-h-[400px] mt-0 py-20 gap-y-20">
        {/* Team member card - Prashanth Kumar */}
        <CoinCard
          img="https://avatars.githubusercontent.com/u/31966594?v=4"
          name="Prashanth Kumar"
          role="Team Lead"
          link1="https://www.github.com/prashanthkumar0/"
          link2="https://www.linkedin.com/in/prashanthkumar0/"
        />
        {/* Team member card - Gajendra Kumar */}
        <CoinCard
          img="https://avatars.githubusercontent.com/u/134202265?v=4"
          name="Gajendra Kumar"
          role="Content Creator || Designer"
          link1="https://github.com/Gajendra-K"
          link2="https://www.linkedin.com/in/gajendra-kumar-118195175/"
        />
        {/* Team member card - Shwetank Tripathi */}
        <CoinCard
          img="https://avatars.githubusercontent.com/u/123956154?v=4"
          name="Shwetank Tripathi"
          role="Fullstack Devloper"
          link1="https://github.com/Shwetank-Tripathi"
          link2="https://www.linkedin.com/in/shwetank-tripathi-4b1871189/"
        />
      </div>
    </div>
  );
}

// Export the AboutPage component as the default export
export default AboutPage;
