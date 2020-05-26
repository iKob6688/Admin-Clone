<template>
  <div class="card">
    <div class="card-header bg-danger text-white">Set up withdrwal</div>
    <div class="card-body">
      <CRow>
        <CCol sm="6" lg="4" class="d-flex align-items-center">
          <CSwitch color="primary" shape="pill" checked value="primary" />
          <span class="ml-2">Forced to withdraw all funds at a time</span>
        </CCol>
      </CRow>
      <hr />
      <div class="card">
        <div class="card-header text-white bg-success">For those who do not accept promotions</div>
        <div class="card-body">
          <CRow>
            <CCol sm="4" lg="4" class="d-flex align-items-center">
              <CSwitch color="warning" shape="pill" value="warning" />
              <span class="ml-2">Off /On</span>
            </CCol>
            <CCol sm="4" lg="4">
              <CInput label="Minimum Amount" v-model="data.min" />
            </CCol>
            <CCol sm="4" lg="4">
              <CInput label="Maximum Amount" v-model="data.max" />
            </CCol>
            <CCol sm="3" lg="3">
                <CButton color="success">Record</CButton>
            </CCol>
          </CRow>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Transfer Withdraw",
  data() {
    return {
      data: {
          min: 500,
          max: 10000
      }
    };
  },
  methods: {}
};
</script>
<style lang="css">
.file-select input {
  border: solid 1px gray;
  border-radius: 10px;
}
</style>