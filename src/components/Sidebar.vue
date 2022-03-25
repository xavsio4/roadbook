<template>
  <div>
    <div
      class="fixed top-0 left-0 z-20 w-full h-full"
      type="fade"
      style="background: rgba(48, 75, 88, 0.5); display: none"
    ></div>
    <div
      class="
        hidden
        w-56
        h-screen
        pb-32
        overflow-y-auto
        bg-white
        border-r border-gray-200 border-solid
        xl:w-64
        sw-scroll
        md:block
      "
    >
      <div class="p-0 m-0 list-none mt-10 first:mt-6">
        <a
          href="/home"
          class="
            cursor-pointer
            px-0
            py-3
            flex
            items-center
            block
            border-l-3 border-solid border-gray-100
          "
          ><span
            class="
              inline-block
              overflow-visible
              h-5
              w-5
              ml-6
              text-sm text-gray-500
              mr-5
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
              height="24px"
              class="h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path></svg></span
          ><span class="text-sm not-italic font-medium leading-5 text-black"
            >Dashboard</span
          ></a
        ><a
          href="/admin/customers"
          class="
            cursor-pointer
            px-0
            py-3
            flex
            items-center
            block
            border-l-3 border-solid border-gray-100
          "
          ><span
            class="
              inline-block
              overflow-visible
              h-5
              w-5
              ml-6
              text-sm text-gray-500
              mr-5
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
              height="24px"
              class="h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path></svg></span
          ><span class="text-sm not-italic font-medium leading-5 text-black"
            >Clients/Suppliers</span
          ></a
        ><a
          href="/admin/items"
          class="
            cursor-pointer
            px-0
            py-3
            flex
            items-center
            block
            border-l-3 border-solid border-gray-100
          "
          ><span
            class="
              inline-block
              overflow-visible
              h-5
              w-5
              ml-6
              text-sm text-gray-500
              mr-5
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
              height="24px"
              class="h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              ></path></svg></span
          ><span class="text-sm not-italic font-medium leading-5 text-black"
            >Items</span
          ></a
        >
      </div>
      <div class="p-0 m-0 list-none mt-10 first:mt-6">
        <a
          href="/admin/estimates"
          class="
            cursor-pointer
            px-0
            py-3
            flex
            items-center
            block
            border-l-3 border-solid border-gray-100
          "
          ><span
            class="
              inline-block
              overflow-visible
              h-5
              w-5
              ml-6
              text-sm text-gray-500
              mr-5
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
              height="24px"
              class="h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              ></path></svg></span
          ><span class="text-sm not-italic font-medium leading-5 text-black"
            >Estimates</span
          ></a
        ><router-link
          to="/sales"
          class="
            active
            cursor-pointer
            px-0
            py-3
            text-primary-500
            flex
            items-center
            border-l-3 border-solid border-primary-500
            bg-gray-100
          "
          ><span
            class="
              inline-block
              overflow-visible
              h-5
              w-5
              ml-6
              text-sm text-primary-500
              mr-5
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
              height="24px"
              class="h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path></svg></span
          ><span
            class="
              text-sm
              not-italic
              font-medium
              leading-5
              text-black text-primary-500
            "
            >Invoices</span
          ></router-link
        ><a
          href="/admin/payments"
          class="
            cursor-pointer
            px-0
            py-3
            flex
            items-center
            block
            border-l-3 border-solid border-gray-100
          "
          ><span
            class="
              inline-block
              overflow-visible
              h-5
              w-5
              ml-6
              text-sm text-gray-500
              mr-5
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
              height="24px"
              class="h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path></svg></span
          ><span class="text-sm not-italic font-medium leading-5 text-black"
            >Payments</span
          ></a
        ><a
          href="/admin/expenses"
          class="
            cursor-pointer
            px-0
            py-3
            flex
            items-center
            block
            border-l-3 border-solid border-gray-100
          "
          ><span
            class="
              inline-block
              overflow-visible
              h-5
              w-5
              ml-6
              text-sm text-gray-500
              mr-5
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
              height="24px"
              class="h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              ></path></svg></span
          ><span class="text-sm not-italic font-medium leading-5 text-black"
            >Expenses</span
          ></a
        >
      </div>
      <div class="p-0 m-0 list-none mt-10 first:mt-6">
        <a
          href="/admin/users"
          class="
            cursor-pointer
            px-0
            py-3
            flex
            items-center
            block
            border-l-3 border-solid border-gray-100
          "
          ><span
            class="
              inline-block
              overflow-visible
              h-5
              w-5
              ml-6
              text-sm text-gray-500
              mr-5
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
              height="24px"
              class="h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              ></path></svg></span
          ><span class="text-sm not-italic font-medium leading-5 text-black"
            >Users</span
          ></a
        ><a
          href="/admin/reports"
          class="
            cursor-pointer
            px-0
            py-3
            flex
            items-center
            block
            border-l-3 border-solid border-gray-100
          "
          ><span
            class="
              inline-block
              overflow-visible
              h-5
              w-5
              ml-6
              text-sm text-gray-500
              mr-5
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
              height="24px"
              class="h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              ></path></svg></span
          ><span class="text-sm not-italic font-medium leading-5 text-black"
            >Reports</span
          ></a
        ><a
          href="/admin/settings"
          class="
            cursor-pointer
            px-0
            py-3
            flex
            items-center
            block
            border-l-3 border-solid border-gray-100
          "
          ><span
            class="
              inline-block
              overflow-visible
              h-5
              w-5
              ml-6
              text-sm text-gray-500
              mr-5
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
              height="24px"
              class="h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path></svg></span
          ><span class="text-sm not-italic font-medium leading-5 text-black"
            >Settings</span
          ></a
        >
      </div>
    </div>
    <div
      class="
        fixed
        top-0
        z-30
        w-64
        h-screen
        pt-16
        pb-32
        overflow-y-auto
        bg-white
        border-r border-gray-200 border-solid
        sw-scroll
        md:hidden
      "
      style="display: none"
    >
      <div class="p-0 m-0 list-none mt-10 first:mt-6">
        <a
          href="/admin/dashboard"
          class="
            cursor-pointer
            px-0
            py-3
            flex
            items-center
            block
            border-l-3 border-solid border-gray-100
          "
          ><span
            class="
              inline-block
              overflow-visible
              h-5
              w-5
              ml-6
              text-sm text-gray-500
              mr-5
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
              height="24px"
              class="h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path></svg></span
          ><span class="text-sm not-italic font-medium leading-5 text-black"
            >Dashboard</span
          ></a
        ><a
          href="/admin/customers"
          class="
            cursor-pointer
            px-0
            py-3
            flex
            items-center
            block
            border-l-3 border-solid border-gray-100
          "
          ><span
            class="
              inline-block
              overflow-visible
              h-5
              w-5
              ml-6
              text-sm text-gray-500
              mr-5
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
              height="24px"
              class="h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path></svg></span
          ><span class="text-sm not-italic font-medium leading-5 text-black"
            >Customers</span
          ></a
        ><a
          href="/admin/items"
          class="
            cursor-pointer
            px-0
            py-3
            flex
            items-center
            block
            border-l-3 border-solid border-gray-100
          "
          ><span
            class="
              inline-block
              overflow-visible
              h-5
              w-5
              ml-6
              text-sm text-gray-500
              mr-5
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
              height="24px"
              class="h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              ></path></svg></span
          ><span class="text-sm not-italic font-medium leading-5 text-black"
            >Items</span
          ></a
        >
      </div>
      <div class="p-0 m-0 list-none mt-10 first:mt-6">
        <a
          href="/admin/estimates"
          class="
            cursor-pointer
            px-0
            py-3
            flex
            items-center
            block
            border-l-3 border-solid border-gray-100
          "
          ><span
            class="
              inline-block
              overflow-visible
              h-5
              w-5
              ml-6
              text-sm text-gray-500
              mr-5
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
              height="24px"
              class="h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              ></path></svg></span
          ><span class="text-sm not-italic font-medium leading-5 text-black"
            >Estimates</span
          ></a
        ><a
          href="/admin/invoices"
          class="
            active
            cursor-pointer
            px-0
            py-3
            text-primary-500
            flex
            items-center
            border-l-3 border-solid border-primary-500
            bg-gray-100
          "
          ><span
            class="
              inline-block
              overflow-visible
              h-5
              w-5
              ml-6
              text-sm text-primary-500
              mr-5
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
              height="24px"
              class="h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path></svg></span
          ><span
            class="
              text-sm
              not-italic
              font-medium
              leading-5
              text-black text-primary-500
            "
            >Invoices</span
          ></a
        ><a
          href="/admin/payments"
          class="
            cursor-pointer
            px-0
            py-3
            flex
            items-center
            block
            border-l-3 border-solid border-gray-100
          "
          ><span
            class="
              inline-block
              overflow-visible
              h-5
              w-5
              ml-6
              text-sm text-gray-500
              mr-5
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
              height="24px"
              class="h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path></svg></span
          ><span class="text-sm not-italic font-medium leading-5 text-black"
            >Payments</span
          ></a
        ><a
          href="/admin/expenses"
          class="
            cursor-pointer
            px-0
            py-3
            flex
            items-center
            block
            border-l-3 border-solid border-gray-100
          "
          ><span
            class="
              inline-block
              overflow-visible
              h-5
              w-5
              ml-6
              text-sm text-gray-500
              mr-5
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
              height="24px"
              class="h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              ></path></svg></span
          ><span class="text-sm not-italic font-medium leading-5 text-black"
            >Expenses</span
          ></a
        >
      </div>
      <div class="p-0 m-0 list-none mt-10 first:mt-6">
        <a
          href="/admin/users"
          class="
            cursor-pointer
            px-0
            py-3
            flex
            items-center
            block
            border-l-3 border-solid border-gray-100
          "
          ><span
            class="
              inline-block
              overflow-visible
              h-5
              w-5
              ml-6
              text-sm text-gray-500
              mr-5
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
              height="24px"
              class="h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              ></path></svg></span
          ><span class="text-sm not-italic font-medium leading-5 text-black"
            >Users</span
          ></a
        ><a
          href="/admin/reports"
          class="
            cursor-pointer
            px-0
            py-3
            flex
            items-center
            block
            border-l-3 border-solid border-gray-100
          "
          ><span
            class="
              inline-block
              overflow-visible
              h-5
              w-5
              ml-6
              text-sm text-gray-500
              mr-5
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
              height="24px"
              class="h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              ></path></svg></span
          ><span class="text-sm not-italic font-medium leading-5 text-black"
            >Reports</span
          ></a
        ><a
          href="/admin/settings"
          class="
            cursor-pointer
            px-0
            py-3
            flex
            items-center
            block
            border-l-3 border-solid border-gray-100
          "
          ><span
            class="
              inline-block
              overflow-visible
              h-5
              w-5
              ml-6
              text-sm text-gray-500
              mr-5
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
              height="24px"
              class="h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path></svg></span
          ><span class="text-sm not-italic font-medium leading-5 text-black"
            >Settings</span
          ></a
        >
      </div>
    </div>
  </div>
</template>
