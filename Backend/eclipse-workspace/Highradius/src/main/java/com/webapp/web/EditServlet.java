package com.webapp.web;

import jakarta.servlet.ServletException;
import com.webapp.dao.webappDao;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.HashMap;

import com.google.gson.Gson;
import com.webapp.bean.models;

/**
 * Servlet implementation class EditServlet
 */
public class EditServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private webappDao webappDao;
	
    public EditServlet() {
    	this.webappDao = new webappDao();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/json");
		HashMap<Object, Object> FinalResponse = new HashMap<Object, Object>();
		try {
			
			int sl_no = Integer.parseInt(request.getParameter("sl_no"));
			String invoice_currency = request.getParameter("invoice_currency");
			String cust_payment_terms = request.getParameter("cust_payment_terms");
			
			models newdata = new models(sl_no,invoice_currency,cust_payment_terms);
	
			
			
			
//			webappDao.insertdata(newdata);
			FinalResponse.put("response", webappDao.updatedata(newdata));
			
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
