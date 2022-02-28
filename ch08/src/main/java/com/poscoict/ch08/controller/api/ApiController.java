package com.poscoict.ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.poscoict.ch08.controller.dto.JsonResult;
import com.poscoict.ch08.controller.dto.XmlResult;
import com.poscoict.ch08.controller.vo.GuestbookVo;

@Controller
@RequestMapping("/api")
public class ApiController {
	
	@ResponseBody
	@RequestMapping("/text")
	public String text() {
		return "Text 데이터";
	}
	
	@ResponseBody
	@RequestMapping("/html")
	public String html() {
		return "<h1>AJAX연습</h1><p>HTML데이터</p>";
	}

	@ResponseBody
	@RequestMapping(value = "/json", method=RequestMethod.GET)
	public JsonResult json() {
		GuestbookVo vo = new GuestbookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호잉");
		
//		JsonResult jsonResult = new JsonResult();
//		jsonResult.setResult("OK");
		
		return JsonResult.success(vo);
		//return JsonResult.fail("Exception...");
	}
	
	@ResponseBody
	@RequestMapping(value = "/xml", method=RequestMethod.GET)
	public Object xml() {
		XmlResult.GuestbookVo vo = new XmlResult.GuestbookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호잉");

		return XmlResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value = "/post01", method=RequestMethod.POST)
	public JsonResult post01(GuestbookVo vo) {
		System.out.println(vo);
		//sersvice -> repository : DB insert 성공한 후 
		vo.setNo(1L);
		vo.setPassword("");
		return JsonResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value = "/post02", method=RequestMethod.POST)
	public JsonResult post02(@RequestBody GuestbookVo vo) {
		System.out.println(vo);
		//sersvice -> repository : DB insert 성공한 후 
		vo.setNo(1L);
		vo.setPassword("");
		return JsonResult.success(vo);
	}
	
}
