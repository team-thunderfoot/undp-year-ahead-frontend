<template functional>
    <div>
        <a v-if="props.blank" :href="props.href" target="blank_" rel="nofollow noopener"><slot /></a>
        <a v-else :href="props.href" rel="nofollow noopener"><slot /></a>
    </div>
</template>