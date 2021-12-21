<template>
    <div class="b--card-i">
        <div class="b--card-i__wrapper">
            <div class="b--card-i__wrapper__hd">
                <div class="b--card-i__wrapper__hd__media-wrapper">
                    <img
                    v-lazy="require(`@/assets/img/en/undp_en.svg`)"
                    alt="undp"
                    title="undp"
                    class="b--card-i__wrapper__hd__media-wrapper__media"
                    />
                </div>
                <p class="b--card-i__wrapper__hd__title">Visit <a class="b--card-i__wrapper__hd__title__link" href=""> www.undp.org</a></p>
            </div>
            <div class="b--card-i__wrapper__bd b--content-a">
                <p>UNDP works in nearly 170 countries and territories, helping to achieve the eradication of poverty, and the reduction of inequalities and exclusion. We help countries to develop policies, leadership skills, partnering abilities, institutional capabilities and build resilience in order to sustain development results.</p>
            </div>
        </div>
        <div class="b--card-i__ft">
            <p class="b--card-i__text">© 2021 United Nations Development Programme</p>
        </div>
    </div>
</template>
<script>
export default {
    props : [
    ]
}
</script>