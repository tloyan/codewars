var number = function(busStops){
  return busStops.reduce((acc, [on, off]) => acc = acc + on - off, 0);
}