<template>
  <div class="row-grid">
    <q-card v-for="i in posts" :key="i.id" class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-caption">
            <q-chip
              clickable
              size="sm"
              square
              icon="folder"
              :label="'Категория №' + i.id"
            />
          </div>
          <div class="text-h6 q-mt-sm q-mb-xs">
            Это не очень длинный заголовок, но всё же
          </div>
          <div class="text-caption text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </q-card-section>

        <q-card-section class="col-lg-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn
          flat
          dense
          color="primary"
          icon="calendar_month"
          label="15 мая 1989"
        />

        <q-btn dense color="primary" outline icon-right="arrow_right_alt" />
      </q-card-actions>
    </q-card>
  </div>
  <div class="q-mt-xl">
    <div class="flex flex-center">
      <q-pagination
        v-model="current"
        :max="100"
        :max-pages="6"
        boundary-numbers
        direction-links
        color="black"
        active-color="yellow"
        active-text-color="black"
      />
    </div>
  </div>
</template>

<script setup>
//import moment from "moment";

//import { date } from "quasar";
import { ref, defineProps } from "vue";
/* const date2 = new Date("2023-01-30 17:06:00").getTime();
const unit = "seconds";

const daTE = ref(date.getDateDiff(Date.now(), date2, unit)); */
const current = ref(1);

const props = defineProps(["posts"]);
</script>

<style lang="scss" scoped>
.my-card {
  margin: 0;
  padding: 0;
}
.row-grid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(470px, 1fr));
  @media (max-width: $breakpoint-sm-max) {
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  }
  gap: 20px;
  justify-content: center;
}
</style>
