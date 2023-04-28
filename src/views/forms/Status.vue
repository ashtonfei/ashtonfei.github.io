<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" sm="12" md="10" lg="8" xl="6">
        <v-alert
          v-if="!item"
          color="error"
          variant="tonal"
          :text="`No record for item ${$route.params.id}`"
        ></v-alert>

        <v-card variant="outlined" v-else>
          <v-card-title> Request Status </v-card-title>
          <v-card-subtitle>
            Here is the progress of your request status:
          </v-card-subtitle>
          <v-card-text>
            <v-list lines="two" density="compact">
              <v-list-item
                v-for="key in keys"
                :key="key"
                :title="item.id ? item[key] : ''"
                :subtitle="key"
              >
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
        <div class="mt-4">
          <div class="d-xs-block d-sm-inline-block mb-4">
            <v-btn variant="tonal" prepend-icon="mdi-home" to="/" block>
              Home
            </v-btn>
          </div>
          <div class="d-xs-block d-sm-inline-block mb-4">
            <v-btn
              variant="tonal"
              prepend-icon="mdi-script"
              to="/forms/request"
              block
            >
              Create Request
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useAppStore } from "../../store/app.js";
import { mapState, mapActions } from "pinia";
export default {
  name: "RequestStatus",
  data: () => ({
    keys: [
      "name",
      "email",
      "service",
      "budget",
      "paid",
      "dueDate",
      "status",
      "createdAt",
      "closedAt",
    ],
    item: {
      name: "",
      email: "",
      service: "",
      budget: "",
      paid: "",
      dueDate: "",
      status: "",
      createdAt: "",
      closedAt: "",
    },
  }),
  methods: {
    ...mapActions(useAppStore, [
      "startLoading",
      "stopLoading",
      "showSnackbar",
      "getCodeRequestById",
    ]),
  },
  async created() {
    const id = this.$route.params.id;
    try {
      this.startLoading();
      this.item = await this.getCodeRequestById(id);
      this.stopLoading();
    } catch (err) {
      this.showSnackbar(err.message, "error");
    }
  },
};
</script>
