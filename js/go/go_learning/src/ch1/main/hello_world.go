package main  // 包 主程序包 module模块化
import (
	"fmt"
	"os"
)

func main()  {
	//
	if len(os.Args) > 1 {
		fmt.Println(os.Args[1]) 
	}
	
    fmt.Println("Hello World!")
}
