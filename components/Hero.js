import React from "react";
import userData from "@constants/data";

export default function Hero() {

  return (
    <div className="px-2 md:px-0">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5 mb-52 sm:mb-auto">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-base sm:text-4xl text-gray-900 dark:text-gray-200 -mb-6">
                <span className="font-bold">HUAWEI</span> Developer Expert
              </h1>
              <h1 className="text-base sm:text-2xl text-gray-900 dark:text-gray-200">
                <a
                  href="https://www.pocketdevs.ph"
                  target="_blank"
                  className="font-bold"
                >
                  PocketDevs
                </a>{" "}
                CEO & Co-founder
              </h1>
              <p className="mx-auto text-sm sm:text-base text-gray-700 dark:text-gray-200 sm:max-w-md lg:text-xl md:max-w-3xl">
                A 24-year-old{" "}
                <span className="font-bold">software engineer</span> based in
                Cebu, Philippines.
              </p>
              <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                <a
                  href="https://discord.com/invite/t5fJFKNdws"
                  target="_blank"
                  className="flex items-center w-full px-6 py-3 mb-3 text-sm text-white dark:text-black dark:bg-white dark:hover:bg-gray-200 bg-black rounded-md sm:mb-0 hover:bg-gray-800 sm:w-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-discord"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                  </svg>
                  &nbsp; Join my&nbsp;
                  <span className="font-bold">Discord Community</span>
                </a>
                <a
                  href="https://calendly.com/bryllim/consultation"
                  target="_blank"
                  className="flex items-center px-6 py-3 text-sm text-gray-900 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar2-week-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM3 10.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
                  </svg>
                  &nbsp; Book a Meeting
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mb-12 order-first sm:order-last">
            <div className="w-full h-auto overflow-hidden">
              <img
                src={userData.avatarUrl}
                alt="avatar"
                className="rounded-3xl shadow"
              />
              <div className="flex flex-row justify-between mt-5">
                <div className="flex flex-row space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-90deg-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                    />
                  </svg>
                  <p className="font-mono">
                    I also make content on{" "}
                    <a
                      href="https://www.tiktok.com/@bryllim"
                      target="_blank"
                      className="font-bold"
                    >
                      TikTok
                    </a>
                    ,{" "}
                    <a
                      href="https://www.youtube.com/watch?v=YiqB0uNQebQ&t=55s"
                      target="_blank"
                      className="font-bold"
                    >
                      Youtube
                    </a>
                    , and{" "}
                    <a
                      href="https://bryllim.medium.com"
                      target="_blank"
                      className="font-bold"
                    >
                      Medium
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
