<div class="mx-auto max-w-7xl pt-8 lg:flex lg:gap-x-16 lg:px-8">
  <main class="px-4 py-16 sm:px-6 lg:flex-auto lg:p-20">
    <div
      class="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none"
    >
      <div>
        <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>
        <p class="mt-1 text-sm leading-6 text-gray-500">
          This information will be displayed publicly so be careful what you
          share.
        </p>

        <dl
          class="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6"
        >
          <div class="col-span-full flex items-center gap-x-8 mt-4">
            <img
              src={"/profile.webp"}
              alt=""
              class="h-24 w-24 flex-none rounded-lg bg-gray-100 object-cover"
            />
            <div>
              <button
                type="button"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >Change avatar</button
              >
              <p class="mt-2 text-xs leading-5 text-gray-400">
                JPG, GIF or PNG.
              </p>
            </div>
          </div>
          <div class="pt-6 sm:flex">
            <dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
              Full name
            </dt>
            <dd class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div class="text-gray-900">Tom Cook</div>
              <button
                type="button"
                class="font-semibold text-indigo-600 hover:text-indigo-500"
                >Update</button
              >
            </dd>
          </div>
          <div class="pt-6 sm:flex">
            <dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
              Email address
            </dt>
            <dd class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div class="text-gray-900">tom.cook@example.com</div>
              <button
                type="button"
                class="font-semibold text-indigo-600 hover:text-indigo-500"
                >Update</button
              >
            </dd>
          </div>
          <div class="pt-6 sm:flex">
            <dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
              Phone Number
            </dt>
            <dd class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div class="text-gray-900">+1 (234)-567-890</div>
              <button
                type="button"
                class="font-semibold text-indigo-600 hover:text-indigo-500"
                >Update</button
              >
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </main>
</div>
