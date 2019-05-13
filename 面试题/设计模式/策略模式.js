const strategy = {
    'S': function(salary) {
      return salary * 4
    },
    'A': function(salary) {
      return salary * 3
    },
    'B': function(salary) {
      return salary * 2
    }
  }
  
  const calculateBonus = function(level, salary) {
    return strategy[level](salary)
  }
  
  calculateBonus('A', 10000) // 30000