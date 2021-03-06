package com.webapp.web;

import jakarta.servlet.ServletException;

import com.google.gson.Gson;
import com.webapp.bean.models;
import com.webapp.dao.webappDao;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;

/**
 * Servlet implementation class DeleteServlet
 */
public class DeleteServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private webappDao webappDao;

    public DeleteServlet() {
    	this.webappDao = new webappDao();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/json");
		HashMap<Object, Object> FinalResponse = new HashMap<Object, Object>();
		try {
			
			int sl_no = Integer.parseInt(request.getParameter("sl_no"));

	
			
			
			
//			webappDao.insertdata(newdata);
			FinalResponse.put("response", webappDao.delete_by_sl_no(sl_no));
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		Gson gson = new Gson();
		String jsonresponse = gson.toJson(FinalResponse);
		response.setHeader("Access-Control-Allow-Origin", "*");
//		response.addHeader("Access-Control-Allow-Methods", "*");
		response.getWriter().append(jsonresponse);
	}
	



}
