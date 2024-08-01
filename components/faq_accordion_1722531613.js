Vue.component('faq_accordion_1722531613', {
  template: `
    <div>
      <section class="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 bg-white">
        <div class="space-y-3 text-center">
          <h1 class="text-4xl text-gray-800 font-semibold pt-10">Frequently Asked Questions</h1>
          <p class="text-gray-600 max-w-lg mx-auto text-lg">Get the scoop on our TP trading app</p>
        </div>
        <div class="mt-14 max-w-2xl mx-auto">
          <div v-for="(item, index) in faqs" :key="index" class="space-y-5 mt-5 overflow-hidden border-b border-gray-200 hover:bg-gray-50 cursor-pointer" @click="toggleFaq(index)">
            <h4 class="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
              { item.q }
              <svg v-if="selectedFaq === index" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </h4>
            <div v-show="selectedFaq === index" style="overflow: hidden; transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;" :style="{ maxHeight: selectedFaq === index ? '1000px' : '0px', opacity: selectedFaq === index ? 1 : 0 }">
              <div class="px-4 py-6">
                <p class="text-gray-700 pb-4 max-w-full text-lg">{ item.a }</p>
              </div>
            </div>
            <br/><br/>
          </div>
        </div>
      </section>
    </div>
  `,
  delimiters: ['{', '}'],
  data() {
    return {
      selectedFaq: null,
      faqs: [
        {
          q: "How does the toilet paper trading app work?",
          a: "Our app connects toilet paper buyers and sellers in real-time, allowing users to trade rolls, packs, or bulk quantities of TP. Simply create an account, list your inventory or browse available offers, and start trading!"
        },
        {
          q: "Is it safe to trade toilet paper through the app?",
          a: "Absolutely! We prioritize user safety with secure in-app messaging, verified user profiles, and a rating system. We also provide guidelines for safe meetups and contactless exchanges."
        },
        {
          q: "What types of toilet paper can I trade on the app?",
          a: "Our app supports all types of toilet paper, from budget-friendly options to luxury quilted varieties. You can even trade eco-friendly and specialty TP products!"
        },
        {
          q: "How do I set pricing for my toilet paper listings?",
          a: "You have full control over your pricing. Check current market trends within the app, consider factors like brand and quantity, and set competitive prices to attract buyers."
        },
        {
          q: "What if I encounter issues during a trade?",
          a: "Our dedicated support team is here to help! If you experience any problems during a trade, use the in-app support feature to report issues. We'll work quickly to resolve any concerns and ensure a smooth trading experience."
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.selectedFaq = this.selectedFaq === index ? null : index;
    }
  }
});