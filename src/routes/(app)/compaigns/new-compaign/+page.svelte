<div class="max-w-4xl mx-auto my-12">
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          Compaign Details
        </h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          Please make sure to fill all of the inputs
        </p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <label
              for="compaign-title"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Title</label
            >
            <div class="mt-2">
              <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
              >
                <span
                  class="flex select-none items-center pl-3 text-gray-500 sm:text-sm"
                ></span>
                <input
                  type="text"
                  name="compaign-title"
                  id="compaign-title"
                  class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="janesmith"
                />
              </div>
            </div>
          </div>

          <div class="col-span-full">
            <label
              for="compaign-description"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Description</label
            >
            <div class="mt-2">
              <textarea
                id="compaign-description"
                name="compaign-description"
                rows="3"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
            <p class="mt-3 text-sm leading-6 text-gray-600">
              Write a few sentences about the compaign.
            </p>
          </div>
        </div>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          Prize Details
        </h2>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label
              for="first-name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Title</label
            >
            <div class="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="col-span-full">
            <label
              for="compaign-description"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Description</label
            >
            <div class="mt-2">
              <textarea
                id="compaign-description"
                name="compaign-description"
                rows="3"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
            <p class="mt-3 text-sm leading-6 text-gray-600">
              Write a few sentences about the prize.
            </p>
          </div>

          <div class="sm:col-span-3">
            <label
              for="country"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Targeted locations</label
            >
            <div class="mt-2">
              <select
                id="country"
                name="country"
                autocomplete="country-name"
                class="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="button"
        class="text-sm font-semibold leading-6 text-gray-900">Cancel</button
      >
      <button
        type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >Save</button
      >
    </div>
  </form>
</div>
