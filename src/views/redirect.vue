<script setup lang="ts" name="Redirect">
const { params, query } = useRoute()
const $router = useRouter()

$router.replace({ path: '/' + params.path, query })
</script>
