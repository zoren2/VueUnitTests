import Vue from 'vue';
import App from '@/App';
import {expect} from 'chai';

describe('App.vue', () => { // Renders this in the terminal as a "Title"
    it('should render correct contents', () => { // Individual test
        const Constructor = Vue.extend(App); // Mocha Constructor needs to extend the base App.vue and subsequently mounted.
        const vm = new Constructor().$mount();

        // Think of expect as assertions,
        // The querySelector() method is native JS
        // vm.$el is the root DOM element that the Vue instance is managing.
        // .to.contain will check the element DOM element text 'to contain' given string.
        expect(
            vm.$el.querySelector('.ui.selectable thead tr th').textContent
        ).to.contain('Items');
        expect(
            vm.$el.querySelector('.ui.button').textContent
        ).to.contain('Add');
        expect(
            vm.$el.querySelector('.ui.label').textContent
        ).to.contain('Remove all');
    });

    // Checks the Vue lifecycle to make sure the shopping list starts off empty.
    it('should set correct default data', () => {
        const initialData = App.data(); // Returns data in key value pairs

        expect(initialData.item).to.equal('');
        expect(initialData.items).to.deep.equal([]); // Checks for equivalence, not identical
    });
});
