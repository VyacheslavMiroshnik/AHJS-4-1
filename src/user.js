export default function checkHealth(obj) {
  let status = '';
  if (obj.health > 50) {
    status = 'healthy';
  } else {
    status = (obj.health <= 15) ? 'critical' : 'wounded';
  }
  return status;
}
