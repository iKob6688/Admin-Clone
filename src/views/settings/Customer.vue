<template>
  <div class="card">
    <div class="card-header bg-danger text-white">Set up</div>
    <div class="card-body">
      <CRow>
        <CCol sm="6" lg="6">
          <CInput label="The Band" v-model="information.brand" disabled />
        </CCol>
        <CCol sm="6" lg="6">
          <CInput label="The Agent" v-model="information.agent" disabled />
        </CCol>
        <CCol sm="6" lg="6">
          <CInput label="Link to play game" v-model="initialInfo.link" />
        </CCol>
        <CCol sm="6" lg="6">
          <CInput label="Line @" v-model="initialInfo.line" />
        </CCol>
        <CCol sm="6" lg="6">
          <CInput label="The Amount" v-model="initialInfo.amount" />
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="6" lg="4" class="d-flex align-items-center">
          <CSwitch color="primary" shape="pill" checked value="primary" />
          <span class="ml-2">Withdraw Bonus</span>
        </CCol>
        <CCol sm="6" lg="4" class="d-flex align-items-center">
          <CSwitch color="success" shape="pill" checked value="success" />
          <span class="ml-2">Promotion before deposit</span>
        </CCol>
      </CRow>
      <hr />
      <div class="card">
        <div class="card-header text-white bg-warning">For those who do not accept promotions</div>
        <div class="card-body">
          <CRow>
            <CCol sm="4" lg="4" class="d-flex align-items-center">
              <CSwitch color="warning" shape="pill" checked value="warning" />
              <span class="ml-2">Add every turn</span>
            </CCol>
            <CCol sm="4" lg="4">
              <CInput
                label="Number of turns"
                v-model="initialInfo.amount"
                description="Will multiply the amount deposited and the bonus multiplied,
                 such as 10 times turn. Deposit 100 bonus 50 customers have to do 1500 turn."
              />
            </CCol>
            <CCol sm="4" lg="4">
              <CInput label="Minimum deposit" v-model="initialInfo.amount" />
            </CCol>
          </CRow>
        </div>
      </div>
      <div class="card">
        <div class="card-header bg-success text-white">Website Logo</div>
        <div class="card-body">
          <CInputFile
            class="file-select"
            label="Please select the site Logo"
            horizontal
            @change="onUploadImage"
          />
          <div v-if="images.length>0" class="mt-3">
            <div class="card">
              <div class="card-header">Logo List</div>
              <div class="card-body">
                <CRow>
                  <CCol lg="12">
                    <CTableWrapper
                      :items="images"
                      :fields="fields"
                      striped
                      caption="Logo List"
                    />
                  </CCol>
                </CRow>
                <CButton color="success">Record</CButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CTableWrapper from "../base/Table";
export default {
  name: "Customer",
  components: { CTableWrapper },
  data() {
    return {
      images: [],
      fields: ["image", "timestamp", "action"],
      information: {
        brand: "Test",
        agent: "Ufabet"
      },
      initialInfo: {
        link: "http://www.ufabet.com",
        line: "https://lin.ee/",
        amount: 500
      }
    };
  },
  methods: {
    onUploadImage(e) {
      console.log("onUploadImage -> e", e);
      let file = e[0];
      console.log("onUploadImage -> file", file);
      let selectedTime = file.lastModified;
      let url = URL.createObjectURL(file);
      console.log(new Date(selectedTime), url);
      this.images.push({
        image: url,
        timestamp: new Date(selectedTime),
        action: () => {
          console.log(url);
        }
      });
    }
  }
};
</script>
<style lang="css">
.file-select input {
  border: solid 1px gray;
  border-radius: 10px;
}
</style>