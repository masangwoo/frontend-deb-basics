package com.poscoict.ch08.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.poscoict.ch08.controller.dto.JsonResult;
import com.poscoict.ch08.controller.vo.GuestbookVo;

@Controller
@RequestMapping("/api/guestbook")
public class GuestbookController {
	
	@ResponseBody
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public JsonResult ex01(@RequestBody GuestbookVo vo) {
		// guestbookService.addMessage(vo);
		vo.setNo(1L);
		vo.setPassword("");
		return JsonResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value="/list", method=RequestMethod.GET)
	public JsonResult ex02(@RequestParam(value="sn", required=true, defaultValue="-1") Long no) {
		// guestbookService.getMessage(no);
		List<GuestbookVo> list = new ArrayList<>();
		
		GuestbookVo vo1 = new GuestbookVo();
		vo1.setNo(1L);
		vo1.setName("둘리");
		vo1.setMessage("호잉");
		list.add(vo1);
		
		GuestbookVo vo2 = new GuestbookVo();
		vo2.setNo(2L);
		vo2.setName("둘리2");
		vo2.setMessage("호잉2");
		list.add(vo2);
		
		GuestbookVo vo3 = new GuestbookVo();
		vo3.setNo(3L);
		vo3.setName("둘리3");
		vo3.setMessage("호잉3");
		list.add(vo3);
		
		return JsonResult.success(list);
	}
	
	@ResponseBody
	@RequestMapping("/delete/{no}")
	public JsonResult ex03(
			@PathVariable("no") Long no, 
			@RequestParam(value="password", required=true, defaultValue = "") String password) {
		//result = guestbookService.deleteMessage(no,password);
		Long data = 0L;
		//1. 삭제가 안된 경우
		data = -1L;
		//2. 삭제가 된 경우
		data = no;
		
		return JsonResult.success(data);
	}
	
}