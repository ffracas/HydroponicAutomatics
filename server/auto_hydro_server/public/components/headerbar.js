Vue.component('headerbar', {
    data: function() {
      return {}
    },
    template: `
      <header>
        <div class="header-container">
          <div class="logo">
            LOGO
          </div>
          <div class="header-links">
            <router-link to="/">
              <div class="headerTitle">
                Home
              </div>
            </router-link>
            <router-link to="/baba">
              <div class="headerTitle">
                404
              </div>
            </router-link>
          </div>
        </div> 
      </header>
    `
  });