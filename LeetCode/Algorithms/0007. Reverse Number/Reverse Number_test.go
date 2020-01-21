/*
 * @Author: JiangZhaojin
 * @Date: 2020-01-21 16:22:30
 * @Description: test
 */
package leetcode

import (
	"fmt"
	"testing"
)

type question struct {
	param  int
	result int
}

func Test_reverse(t *testing.T) {
	qs := []question{
		question{
			123,
			321,
		},
		question{
			345,
			543,
		},
		question{
			567,
			765,
		},
	}

	fmt.Print("------- Result -------\n")

	for _, q := range qs {
		param, result := q.param, q.result
		output := reverse(param)
		fmt.Printf("Param: %v, Right: %v, Output: %v\n", param, result, output)
		if result != output {
			t.Fatalf("case %v faild.\n", param)
		}
	}
}
