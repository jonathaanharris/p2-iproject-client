<template>
  <div>
    <section class="section">
      <div class="row">
        <BalanceAllCard class="col-12"></BalanceAllCard>
        <div class="col-xl-4 col-lg-6">
          <div class="card l-bg-cyan">
            <div class="card-statistic-3 p-4">
              <div class="card-icon card-icon-large">
                <i class="fa-brands fa-btc"></i>
              </div>
              <div class="mb-4">
                <h5 class="card-title mb-0">Balance in IDR</h5>
              </div>
              <div class="row align-items-center mb-2 d-flex">
                <div class="col-8">
                  <h2 class="d-flex align-items-center mb-0">
                    {{ this.$store.state.balanceTotal }}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6">
          <div class="card l-bg-green">
            <div class="card-statistic-3 p-4">
              <div class="card-icon card-icon-large">
                <i class="fa-brands fa-btc"></i>
              </div>
              <div class="mb-4">
                <h5 class="card-title mb-0">Income in IDR</h5>
              </div>
              <div class="row align-items-center mb-2 d-flex">
                <div class="col-8">
                  <h2 class="d-flex align-items-center mb-0">
                    {{ this.$store.state.income }}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6">
          <div class="card l-bg-orange">
            <div class="card-statistic-3 p-4">
              <div class="card-icon card-icon-large"></div>
              <div class="mb-4">
                <h5 class="card-title mb-0">Spending in IDR</h5>
              </div>
              <div class="row align-items-center mb-2 d-flex">
                <div class="col-8">
                  <h2 class="d-flex align-items-center mb-0">
                    {{ this.$store.state.spending }}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6">
          <div class="card l-bg-cherry">
            <div class="card-statistic-3 p-4">
              <div class="card-icon card-icon-large"></div>
              <div class="mb-4">
                <h5 class="card-title mb-0">Etherium Rate in IDR</h5>
              </div>
              <div class="row align-items-center mb-2 d-flex">
                <div class="col-8">
                  <h2 class="d-flex align-items-center mb-0">
                    {{ this.$store.state.rateEth }}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6">
          <div class="card l-bg-orange-dark">
            <div class="card-statistic-3 p-4">
              <div class="card-icon card-icon-large">
                <i class="fas fa-dollar-sign"></i>
              </div>
              <div class="mb-4">
                <h5 class="card-title mb-0">USD Rate in IDR</h5>
              </div>
              <div class="row align-items-center mb-2 d-flex">
                <div class="col-8">
                  <h2 class="d-flex align-items-center mb-0">
                    {{ this.$store.state.rateUsd }}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6">
          <div class="card l-bg-blue-dark">
            <div class="card-statistic-3 p-4">
              <div class="card-icon card-icon-large">
                <i class="fas fa-euro-sign"></i>
              </div>
              <div class="mb-4">
                <h5 class="card-title mb-0">EUR Rate in IDR</h5>
              </div>
              <div class="row align-items-center mb-2 d-flex">
                <div class="col-8">
                  <h2 class="d-flex align-items-center mb-0">
                    {{ this.$store.state.rateEur }}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6">
          <div class="card l-bg-green-dark">
            <div class="card-statistic-3 p-4">
              <div class="card-icon card-icon-large">
                <i class="fa-duotone fa-percent"></i>
              </div>
              <div class="mb-4">
                <h5 class="card-title mb-0">Bitcoin Rate in IDR</h5>
              </div>
              <div class="row align-items-center mb-2 d-flex">
                <div class="col-8">
                  <h2 class="d-flex align-items-center mb-0">
                    {{ this.$store.state.rateBtc }}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import BalanceAllCard from "../components/BalanceAllCard.vue";

export default {
  name: "Home",
  components: {
    BalanceAllCard,
  },
  methods: {
    checkLog() {
      if (localStorage.getItem("access_token")) {
        this.$store.commit("SET_ISLOGGEDIN", true);
      }
    },
  },
  async beforeCreated() {
    await this.checkLog();
  },
};
</script>
<style>
.card {
  background-color: #fff;
  border-radius: 10px;
  border: none;
  position: relative;
  margin-bottom: 30px;
  box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1),
    0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1),
    0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12),
    0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
}
.l-bg-cherry {
  background: linear-gradient(to right, #493240, #f09) !important;
  color: #fff;
}

.l-bg-blue-dark {
  background: linear-gradient(to right, #373b44, #4286f4) !important;
  color: #fff;
}

.l-bg-green-dark {
  background: linear-gradient(to right, #0a504a, #38ef7d) !important;
  color: #fff;
}

.l-bg-orange-dark {
  background: linear-gradient(to right, #a86008, #ffba56) !important;
  color: #fff;
}

.card .card-statistic-3 .card-icon-large .fas,
.card .card-statistic-3 .card-icon-large .far,
.card .card-statistic-3 .card-icon-large .fab,
.card .card-statistic-3 .card-icon-large .fal {
  font-size: 110px;
}

.card .card-statistic-3 .card-icon {
  text-align: center;
  line-height: 50px;
  margin-left: 15px;
  color: #000;
  position: absolute;
  right: -5px;
  top: 20px;
  opacity: 0.1;
}

.l-bg-cyan {
  background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
  color: #fff;
}

.l-bg-green {
  background: linear-gradient(135deg, #23bdb8 0%, #43e794 100%) !important;
  color: #fff;
}

.l-bg-orange {
  background: linear-gradient(to right, #f9900e, #ffba56) !important;
  color: #fff;
}

.l-bg-cyan {
  background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
  color: #fff;
}
</style>
