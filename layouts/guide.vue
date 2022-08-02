<template>
    <div class="bg-slate-900 text-white h-screen overflow-hidden flex flex-col">
        <Navbar />
        <div class="flex flex-row overflow-hidden max-h-full">
            <Sidebar />
            <slot></slot>
        </div>
    </div>
</template>
