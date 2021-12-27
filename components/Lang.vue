<template>
    <div class="b--lang-a" data-dropdown-languages v-if="languages" :class="{'b--lang-a--is-hidden' : !langIsVisible}">
        <button class="b--lang-a__btn" aria-label="Languages" data-opening-action  @click.prevent="openDropdown()">
            <svg class="b--lang-a__btn__artwork" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.849 23.938C18.0395 22.6487 18.6693 20.9395 18.6 19.186H1V1H24.13V15.718L24.125 15.724C24.125 15.771 24.125 15.818 24.125 15.866C24.155 20.528 17.456 24.738 16.425 24.738C16.171 24.738 16.254 24.49 16.849 23.938Z" stroke="#006EB5" stroke-width="1.5"/>
                <path d="M13.8354 13.792L17.1929 5.70216L20.4644 13.792" stroke="#006EB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.3076 10.9204H19.2363" stroke="#006EB5" stroke-width="1.5"/>
                <path d="M4.38086 7.01708H10.9248" stroke="#006EB5" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M4.38086 13.4156C4.38086 13.4156 9.84778 13.8868 10.1758 7.15782" stroke="#006EB5" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M11.0771 13.7918C11.0771 13.7918 6.63075 13.315 5.46875 9.36597" stroke="#006EB5" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M7.65723 4.33564V6.81318" stroke="#006EB5" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <span class="b--lang-a__btn__title">{{languageSelectorActive}}</span>
            <svg class="b--lang-a__btn__icon" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.74854 1.443L8.60205 9.87269L15.4565 1.443" stroke="#D12800" stroke-width="2"/>
            </svg>
        </button>
        <div class="b--lang-a__wrapper" data-options>
            <ul class="b--lang-a__wrapper__list-group" data-options>
                <li class="b--lang-a__wrapper__list-group__list-item" v-if="languageSelectorActive != languages.en">
                    <a class="b--lang-a__wrapper__list-group__list-item__link" href="#" @click.prevent="changeLanguage('')">{{languages.en}}</a>
                </li>
                <li class="b--lang-a__wrapper__list-group__list-item" v-if="languageSelectorActive != languages.fr">
                    <a class="b--lang-a__wrapper__list-group__list-item__link" href="#" @click.prevent="changeLanguage('fr')">{{languages.fr}}</a>
                </li>
                <li class="b--lang-a__wrapper__list-group__list-item" v-if="languageSelectorActive != languages.es">
                    <a class="b--lang-a__wrapper__list-group__list-item__link" href="#" @click.prevent="changeLanguage('es')">{{languages.es}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data:()=>{
		return{
            languages : null,
            langIsVisible : true
		}
	},
    methods : {
        getContent(){
            this.lang = this.$route.name == 'index' ? 'en' : this.$route.name;
            var settings = this.getLanguageSettings({lang : this.lang});
            this.languages = settings.Languages;
            switch (this.lang) {
                case 'en':
                    this.languageSelectorActive = this.languages.en;
                    break;
                case 'fr':
                    this.languageSelectorActive = this.languages.fr;
                    break;
                case 'es':
                    this.languageSelectorActive = this.languages.es;
                    break;
                default:
                    break;
            }
        },
        changeLanguage(actualLanguage) {
            this.$router.push({
                path: '/' + actualLanguage
            })
        },
        openDropdown() {
            document.querySelector(".b--lang-a").classList.toggle("b--lang-a--is-active");
        },
        handleScroll (event) {
            // Any code to be executed when the window is scrolled
            if(window.pageYOffset > 80){
                this.langIsVisible = false;
            }else{
                this.langIsVisible = true;
            }
        }
    },
    created(){
        window.addEventListener('scroll', this.handleScroll);
        this.getContent();
    }
}
</script>
