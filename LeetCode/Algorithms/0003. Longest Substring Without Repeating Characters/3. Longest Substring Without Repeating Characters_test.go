package leetcode

import (
	"fmt"
	"testing"
)

type question struct {
	input  string
	result int
}

func Test_getLongestSubstring(t *testing.T) {
	questions := []question{
		question{"adadad", 2},
		question{"dxgtrod", 6},
	}
	fmt.Printf("------------------------\n")
	for _, q := range questions {
		fmt.Printf("input:%v, output:%v\n", q.input, q.result)
		result := getLongestSubstring(q.input)
		if q.result != result {
			t.Fatalf("case %v failed, result: %v", q.input, q.result)
		}
	}
}
