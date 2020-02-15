package leetcode

import (
	"fmt"
	"testing"
)

type question struct {
	param
	ans
}

type param struct {
	one []int
}

type ans struct {
	one int
}

func Test_Container_Water(t *testing.T) {
	questionList := []question{
		question{
			param{[]int{1, 2, 3}},
			ans{2},
		},
	}

	fmt.Print("----------- Test Container Warter ------------\n")

	for _, q := range questionList {
		p := q.param
		fmt.Printf("Input: %v, Output: %v\n", p.one, maxArea(p.one))
	}
}
