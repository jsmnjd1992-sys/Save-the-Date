// Countdown reads ISO datetime from #countdown data attribute
(function(){
  const el = document.getElementById("countdown");
  const iso = el?.getAttribute("data-wedding");
  if(!iso){ if(el) el.textContent = "—"; return; }
  const date = new Date(iso);
  function tick(){
    const now = new Date();
    const diff = date - now;
    if(Number.isNaN(date.getTime())){ el.textContent = "Invalid date"; return; }
    if(diff <= 0){ el.textContent = "It's our wedding day! 🎉"; return; }
    const days = Math.floor(diff/(1000*60*60*24));
    const hours = Math.floor((diff/(1000*60*60))%24);
    const mins = Math.floor((diff/(1000*60))%60);
    el.textContent = `${days} days, ${hours} hours, ${mins} minutes`;
    setTimeout(tick, 1000);
  }
  tick();
})();