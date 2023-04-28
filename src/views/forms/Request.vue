<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" sm="12" md="8" lg="6" xl="4">
        <v-form @submit.prevent="onSubmit" ref="form" :disabled="loading">
          <v-card variant="outlined">
            <template v-slot:title>
              <span class="text-primary">New Code Request</span>
            </template>
            <template v-slot:subtitle>
              <span class="text-wrap"
                >Send a support request for any project related to Google Apps
                Script, Web Application, API Integration, Workflow
                Automation.</span
              >
            </template>

            <template v-slot:text>
              <v-row no-gutters>
                <v-col cols="12"> </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  :md="form[key].md || 12"
                  :lg="form[key].lg || 12"
                  v-for="key in formKeys"
                  :key="key"
                >
                  <v-select
                    v-if="form[key].type == 'select'"
                    v-model="form[key].value"
                    :label="form[key].label"
                    :rules="form[key].rules || []"
                    :items="form[key].items"
                    :multiple="form[key].multiple || false"
                    :placeholder="form[key].placeholder"
                    :hint="form[key].hint"
                    :variant="variant"
                    :density="density"
                  >
                  </v-select>
                  <v-textarea
                    v-else-if="form[key].type === 'textarea'"
                    v-model="form[key].value"
                    :type="form[key].type || 'text'"
                    :label="form[key].label"
                    :placeholder="form[key].placeholder"
                    :hint="form[key].hint"
                    :rules="form[key].rules || []"
                    :rows="form[key].rows"
                    :variant="variant"
                    :density="density"
                    no-resize
                    auto-grow
                  ></v-textarea>
                  <v-text-field
                    v-else-if="form[key].type === 'number'"
                    v-model.number="form[key].value"
                    :type="form[key].type || 'number'"
                    :label="form[key].label"
                    :rules="form[key].rules || []"
                    :placeholder="form[key].placeholder"
                    :min="form[key].min"
                    :max="form[key].max"
                    :step="form[key].step"
                    :hint="form[key].hint"
                    :variant="variant"
                    :density="density"
                  ></v-text-field>
                  <v-text-field
                    v-else
                    v-model.trim="form[key].value"
                    :type="form[key].type || 'text'"
                    :label="form[key].label"
                    :rules="form[key].rules || []"
                    :placeholder="form[key].placeholder"
                    :hint="form[key].hint"
                    :variant="variant"
                    :density="density"
                  ></v-text-field>
                </v-col>
              </v-row>
            </template>
            <v-card-actions class="pa-4 pb-3 d-xs-block d-sm-inline-block">
              <v-btn
                variant="tonal"
                type="submit"
                color="theme-red"
                prepend-icon="mdi-script"
                :loading="loading"
                :disabled="loading"
                block
              >
                submit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { _getFormValues_ } from "@/utils/index.js";
import { mapState, mapActions } from "pinia";
import { useAppStore } from "@/store/app.js";

export default {
  data: () => ({
    density: "default",
    variant: "underlined",
    formKeys: ["name", "email", "service", "budget", "dueDate", "description"],
    form: {
      name: {
        value: "",
        label: "Name",
        rules: [(v) => !!v || "This is required"],
      },
      email: {
        value: "",
        type: "email",
        label: "Email",
        rules: [
          (v) => !!v || "This is required",
          (v) =>
            /^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(v) || "Must be a valid email",
        ],
      },
      budget: {
        value: 200,
        min: 200,
        max: 10000,
        step: 50,
        type: "number",
        label: "Budget",
        hint: "Budget in USD",
        rules: [
          (v) => !!v || "This is required",
          (v) => (v >= 200 && v <= 10000) || "Budget between $200 and $10K",
        ],
      },
      dueDate: {
        value: new Date(new Date() + 30 * 24 * 3600)
          .toISOString()
          .slice(0, 10)
          .replace(/-/g, "/"),
        type: "text",
        label: "Due Date",
        placeholder: "YYYY/MM/DD",
        rules: [
          (v) => !!v || "This is required",
          (v) => /^\d{4}\/\d{2}\/\d{2}$/.test(v) || "Invliad date format",
        ],
      },
      service: {
        type: "select",
        value: "Apps Script",
        label: "Service",
        items: [
          "Apps Script",
          "Workflow Automation",
          "API Integration",
          "Web App",
        ],
        rules: [(v) => !!v || "This is required"],
      },
      description: {
        value: "",
        type: "textarea",
        label: "Description",
        rows: 8,
        placeholder:
          "Describe your project requirement here as clear as possible",
        rules: [(v) => !!v || "This is required"],
      },
    },
  }),
  computed: {
    ...mapState(useAppStore, ["loading"]),
  },
  methods: {
    ...mapActions(useAppStore, ["startLoading", "showSnackbar", "apiCall"]),
    async onSubmit() {
      const formValidation = await this.$refs.form.validate();
      if (formValidation.valid !== true) return;
      this.startLoading();
      const payload = _getFormValues_(this.form);
      payload.links = "";
      const api = "";
      try {
        await this.apiCall(payload);
        this.$router.push("/");
        this.showSnackbar(
          "Thanks for your submission, you will be in touch soon!",
          "success"
        );
      } catch (err) {
        this.$router.push("/");
        this.showSnackbar(
          "Thanks for your submission, you will be in touch soon!",
          "success"
        );
      }
    },
  },
};
</script>
