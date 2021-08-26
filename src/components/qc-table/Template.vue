<template>
    <div>
        <table class="table table-borderless text-center rounded-sm shadow-l" style="overflow: hidden;">
            <thead>
                <tr class="bg-blue-dark">
                    <th v-for="(column, key) in columns" :key="'header-' + key" class="color-white">
                        {{ column.label }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, id) in data" :key="'row-' + id">
                    <td v-for="(column, key) in columns" :key="'column-' + key"> {{row[keys]}} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: "Template"
}
</script>

<style scoped>

</style>
