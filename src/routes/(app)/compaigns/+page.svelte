<script>
  let openOptions = false;

  // Profile Menu Visibility
  function toggleMenuVisibility() {
    openOptions = !openOptions;
  }
</script>

<div class="py-10">
  <header>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">
        Compaigns
      </h1>
    </div>
  </header>
  <main>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="w-full">
        <div
          class="border-b border-gray-200 pb-3 w-full flex items-center justify-between"
        >
          <h3 class="text-lg font-semibold leading-6 text-gray-900 mt-10">
            All compaigns
          </h3>

          <div class="mt-6">
            <a
              href="compaigns/new-compaign"
              class="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <svg
                class="-ml-1.5 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                />
              </svg>
              Add New
            </a>
          </div>
        </div>

        <!-- compaigns -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          <div class="border border-gray-200 p-5 rounded-md">
            <div class="sm:flex sm:items-baseline sm:justify-between">
              <div class="sm:w-0 sm:flex-1">
                <h1
                  id="message-heading"
                  class="text-base font-semibold leading-6 text-gray-900"
                >
                  Compaign title
                </h1>
                <p class="mt-1 truncate text-sm text-gray-500">
                  Compaign short description
                </p>

                <div class="relative flex items-center space-x-3 mt-6">
                  <div class="flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div class="min-w-0 flex-1">
                    <a href="#" class="focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true"></span>
                      <p class="text-sm font-medium text-gray-900">
                        Leslie Alexander
                      </p>
                      <p class="truncate text-sm text-gray-500">Manager</p>
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="mt-4 flex items-center justify-between sm:ml-6 sm:mt-0 sm:flex-shrink-0 sm:justify-start"
              >
                <!-- <span
                    class="inline-flex items-center rounded-full bg-green-50 text-xs font-medium ring-1 ring-inset ring-green-600/20"
                    ></span> -->
                <div
                  class="flex-none rounded-full p-1 text-green-400 bg-green-400/10"
                >
                  <div class="h-2 w-2 rounded-full bg-current"></div>
                </div>
                <div class="relative ml-3 inline-block text-left">
                  <div>
                    <button
                      on:click={toggleMenuVisibility}
                      type="button"
                      class="-my-2 flex items-center rounded-full bg-white p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      id="menu-0-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span class="sr-only">Open options</span>
                      <svg
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                        />
                      </svg>
                    </button>
                  </div>

                  <!--
                      Dropdown menu, show/hide based on menu state.
            
                      Entering: "transition ease-out duration-100"
                        From: "transform opacity-0 scale-95"
                        To: "transform opacity-100 scale-100"
                      Leaving: "transition ease-in duration-75"
                        From: "transform opacity-100 scale-100"
                        To: "transform opacity-0 scale-95"
                    -->
                  {#if openOptions}
                    <div
                      class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-0-button"
                      tabindex="-1"
                    >
                      <div class="py-1" role="none">
                        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                        <a
                          href="/preview"
                          class="text-gray-700 flex justify-between px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-0-item-0"
                        >
                          <span>Preview</span>
                        </a>

                        <a
                          href="/preview"
                          class="text-gray-700 flex justify-between px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-0-item-0"
                        >
                          <span>Edit</span>
                        </a>

                        <a
                          href="/preview"
                          class="text-gray-700 flex justify-between px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-0-item-1"
                        >
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>{/if}
                </div>
              </div>
            </div>
          </div>

          <div class="border border-gray-200 p-5 rounded-md">
            <div class="sm:flex sm:items-baseline sm:justify-between">
              <div class="sm:w-0 sm:flex-1">
                <h1
                  id="message-heading"
                  class="text-base font-semibold leading-6 text-gray-900"
                >
                  Compaign title
                </h1>
                <p class="mt-1 truncate text-sm text-gray-500">
                  Compaign short description
                </p>

                <div class="relative flex items-center space-x-3 mt-6">
                  <div class="flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div class="min-w-0 flex-1">
                    <a href="#" class="focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true"></span>
                      <p class="text-sm font-medium text-gray-900">
                        Leslie Alexander
                      </p>
                      <p class="truncate text-sm text-gray-500">Manager</p>
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="mt-4 flex items-center justify-between sm:ml-6 sm:mt-0 sm:flex-shrink-0 sm:justify-start"
              >
                <!-- <span
                    class="inline-flex items-center rounded-full bg-green-50 text-xs font-medium ring-1 ring-inset ring-green-600/20"
                    ></span> -->
                <div
                  class="flex-none rounded-full p-1 text-red-400 bg-red-400/10"
                >
                  <div class="h-2 w-2 rounded-full bg-current"></div>
                </div>
                <div class="relative ml-3 inline-block text-left">
                  <div>
                    <button
                      on:click={toggleMenuVisibility}
                      type="button"
                      class="-my-2 flex items-center rounded-full bg-white p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      id="menu-0-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span class="sr-only">Open options</span>
                      <svg
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                        />
                      </svg>
                    </button>
                  </div>

                  <!--
                      Dropdown menu, show/hide based on menu state.
            
                      Entering: "transition ease-out duration-100"
                        From: "transform opacity-0 scale-95"
                        To: "transform opacity-100 scale-100"
                      Leaving: "transition ease-in duration-75"
                        From: "transform opacity-100 scale-100"
                        To: "transform opacity-0 scale-95"
                    -->
                  {#if openOptions}
                    <div
                      class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-0-button"
                      tabindex="-1"
                    >
                      <div class="py-1" role="none">
                        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                        <a
                          href="/preview"
                          class="text-gray-700 flex justify-between px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-0-item-0"
                        >
                          <span>Preview</span>
                        </a>

                        <a
                          href="/preview"
                          class="text-gray-700 flex justify-between px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-0-item-0"
                        >
                          <span>Edit</span>
                        </a>

                        <a
                          href="/preview"
                          class="text-gray-700 flex justify-between px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-0-item-1"
                        >
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>{/if}
                </div>
              </div>
            </div>
          </div>

          <div class="border border-gray-200 p-5 rounded-md">
            <div class="sm:flex sm:items-baseline sm:justify-between">
              <div class="sm:w-0 sm:flex-1">
                <h1
                  id="message-heading"
                  class="text-base font-semibold leading-6 text-gray-900"
                >
                  Compaign title
                </h1>
                <p class="mt-1 truncate text-sm text-gray-500">
                  Compaign short description
                </p>

                <div class="relative flex items-center space-x-3 mt-6">
                  <div class="flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div class="min-w-0 flex-1">
                    <a href="#" class="focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true"></span>
                      <p class="text-sm font-medium text-gray-900">
                        Leslie Alexander
                      </p>
                      <p class="truncate text-sm text-gray-500">Manager</p>
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="mt-4 flex items-center justify-between sm:ml-6 sm:mt-0 sm:flex-shrink-0 sm:justify-start"
              >
                <!-- <span
                    class="inline-flex items-center rounded-full bg-green-50 text-xs font-medium ring-1 ring-inset ring-green-600/20"
                    ></span> -->
                <div
                  class="flex-none rounded-full p-1 text-green-400 bg-green-400/10"
                >
                  <div class="h-2 w-2 rounded-full bg-current"></div>
                </div>
                <div class="relative ml-3 inline-block text-left">
                  <div>
                    <button
                      on:click={toggleMenuVisibility}
                      type="button"
                      class="-my-2 flex items-center rounded-full bg-white p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      id="menu-0-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span class="sr-only">Open options</span>
                      <svg
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                        />
                      </svg>
                    </button>
                  </div>

                  <!--
                      Dropdown menu, show/hide based on menu state.
            
                      Entering: "transition ease-out duration-100"
                        From: "transform opacity-0 scale-95"
                        To: "transform opacity-100 scale-100"
                      Leaving: "transition ease-in duration-75"
                        From: "transform opacity-100 scale-100"
                        To: "transform opacity-0 scale-95"
                    -->
                  {#if openOptions}
                    <div
                      class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-0-button"
                      tabindex="-1"
                    >
                      <div class="py-1" role="none">
                        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                        <a
                          href="/preview"
                          class="text-gray-700 flex justify-between px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-0-item-0"
                        >
                          <span>Preview</span>
                        </a>

                        <a
                          href="/preview"
                          class="text-gray-700 flex justify-between px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-0-item-0"
                        >
                          <span>Edit</span>
                        </a>

                        <a
                          href="/preview"
                          class="text-gray-700 flex justify-between px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-0-item-1"
                        >
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>{/if}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
