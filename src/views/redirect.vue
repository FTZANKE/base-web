<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

defineOptions({ name: 'Redirect' })
const { params, query } = useRoute()
const $router = useRouter()

$router.replace({ path: '/' + params.path, query })
</script>
