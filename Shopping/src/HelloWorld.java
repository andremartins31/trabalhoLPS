
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



abstract class HelloWorld$$ProductCadastre extends HttpServlet{
	
	protected void service (HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter out = response.getWriter();

        // escreve o texto
        out.println("<html>");
        out.println("<body>");
        out.println("PoductCadastre");
        out.println("</body>");
        out.println("</html>");
    }
}



public class HelloWorld extends  HelloWorld$$ProductCadastre  {
	
	protected void service (HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter out = response.getWriter();

        // escreve o texto
        out.println("<html>");
        out.println("<body>");
        out.println("Sell");
        out.println("</body>");
        out.println("</html>");
        response.sendRedirect("helloWorld.jsp");
    }
}