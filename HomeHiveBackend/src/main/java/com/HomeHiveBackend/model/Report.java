package com.HomeHiveBackend.model;

import java.util.Arrays;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
//@Getter
//@Setter
//@NoArgsConstructor
//@ToString
@Table(name = "reports")
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "report_type")
    private String reportType;

    @Column(name = "data")
    private List[] data;

    public void generate() {

    }
    
    public Report() {
    	
    }

	public Report(Long id, String reportType, List[] data) {
		super();
		this.id = id;
		this.reportType = reportType;
		this.data = data;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getReportType() {
		return reportType;
	}

	public void setReportType(String reportType) {
		this.reportType = reportType;
	}

	public List[] getData() {
		return data;
	}

	public void setData(List[] data) {
		this.data = data;
	}

	@Override
	public String toString() {
		return "Report [id=" + id + ", reportType=" + reportType + ", data=" + Arrays.toString(data) + "]";
	}

}
