export function initRouteStatusMonitor() {
  const syncBtn = document.getElementById('btn-sync-routes');
  const routeList = document.querySelectorAll('#route-list li');
  const activeStat = document.getElementById('stat-active');
  const delayedStat = document.getElementById('stat-delayed');

  if (!syncBtn) return;
  syncBtn.addEventListener('click', () => {
    let active = 0;
    let delayed = 0;

    routeList.forEach((route) => {
      if (route.dataset.status === "active") {
        active++;
      } else if (route.dataset.status === "delayed") {
        delayed++;
      }
    });

    activeStat.textContent = `Active Routes: ${active}`;
    delayedStat.textContent = `Delayed/Full: ${delayed}`;

  });
}