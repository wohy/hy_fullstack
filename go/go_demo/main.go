// 爬取
package main

import (
	"net/http"
	"log"
)

func BaiduHotSearch() {
	res, err := http.Get(
		"http://www.baidu.com")
	if err != nil {
		log.Fatal(err)
	}
	defer res.Body.Close() // ?
	if res.StatusCode != 200 {
		log.Fatalf("status code error:%d %s",
	res.StatusCode, res.Status)
	}
	
}

func main() {
	BaiduHotSearch() // 函数模块
}